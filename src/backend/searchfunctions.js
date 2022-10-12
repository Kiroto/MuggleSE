const data = require("./scrappedData.json");

/**
 * @typedef {Object} SearchResultInfo
 * @property {string} path
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} BackendResults
 * @property {Array<SearchResultInfo>} results an array with contents with the signature {path: string, title: string, description: string}
 * @property {int} pages the number of pages of results found (a page contains 20 results)
 */

/**
 *
 * @param {string} query whatever the user is searching for
 * @param {number} page the pagination for that search
 * @return {BackendResults} the results of that backend search
 */

const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0) costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue =
                            Math.min(Math.min(newValue, lastValue), costs[j]) +
                            1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

const similarity = (s1, s2) => {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (
        (longerLength - editDistance(longer, shorter)) /
        parseFloat(longerLength)
    );
}

const similBonus = 0.7
const similCutoff = 0.5

const doSearch = (query, page) => {
    if (!page) page = 1;
    page -= 1;
    const returnedData = data
        .map((item) => {
            const tt = item.title[0]
            let strSimil = 0;
            if (tt) {
                strSimil = similarity(tt, query);
            }
            return {
                title: item.title,
                description: item.description[0][0],
                path: item.path,
                simil: strSimil,
            };
        })
        .filter((item) => {
            if (!item.title || !item.description || item.title.length <= 3) {
                return false
            }
            const lwct = item.title.toLowerCase()
            const lwcq = query.toLowerCase();
            const lwcd = item.description.toLowerCase()
            const exactBonus = lwct.includes(lwcq) + lwcd.includes(lwcq) * 0.2 + item.path.includes(lwcq) * 0.5;
            item.simil += exactBonus * similBonus;
            
            return item.simil >= similCutoff;
        }).sort((item) => {
            return item.simil
        });
    const pages = Math.ceil(returnedData.length / 20);
    const returnedPage = returnedData.slice(page * 20, page * 20 + 20);
    return {
        pages: pages,
        results: returnedPage,
    };
};

export default doSearch;
