// const data = require("./scrappedData.json");

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
};

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
};

const similCutoff = 0.8; // 50%

const exampleData = {
    results: [
        {
            url: "facebook.com",
            titulo: "Facebook",
            descripcion:
                "Crea una cuenta o inicia sesión en Facebook. Conéctate con amigos, familiares y otras personas que conozcas. Comparte fotos y videos.",
        },
        {
            url: "google.com",
            titulo: "Google",
            descripcion:
                "Busque la información del mundo, incluidas páginas web, imágenes, videos y más. Google tiene muchas características especiales para ayudarlo a encontrar exactamente lo que está buscando.",
        },
        {
            url: "https://www.instagram.com",
            titulo: "Instagram",
            descripcion: "Red social para compartir fotos y videos",
        },
        {
            url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
            titulo: "Baby Shark Dance | Sing and Dance! | @Baby Shark Official",
            descripcion:
                "Baby Shark is here with a fun sing-along and dance video!",
        },
        {
            url: "https://www.youtube.com/watch?v=3tmd-ClpJxA",
            titulo: "Maroon 5 - Sugar (Official Music Video)",
            descripcion: 'Official music video for Maroon 5s "Sugar".',
        },
        {
            url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
            titulo: "PSY - GANGNAM STYLE (?????) M/V",
            descripcion: '"PSY"s mega-hit "Gangnam Style" music video.',
        },
        {
            url: "https://www.youtube.com/watch?v=CevxZvSJLk8",
            titulo: "Katy Perry - Roar (Official)",
            descripcion: 'Official music video for Katy Perrys "Roar".',
        },
        {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            titulo: "Rick Astley - Never Gonna Give You Up (Video)",
            descripcion:
                "Rick Astley`s official music video for “Never Gonna Give You Up”.",
        },
        {
            url: "https://www.youtube.com/watch?v=fRh_vgS2dFE",
            titulo: "Ed Sheeran - Shape of You (Official Music Video)",
            descripcion: 'Official music video for Ed Sheerans "Shape of You".',
        },
    ],
    pages: 9,
};

const doSearch = (query, page, dataFunction) => {
    const localurl = "localhost:5241";

    if (!page) page = 1;
    page -= 1;

    const searchUrl =
        `http://${localurl}/buscador/busqueda?q=${query}&page=${page}`;

    const fetchResults = fetch(searchUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (res.ok) return res.json();
            return exampleData;
        })
        .then((data) => {
            const results = data["results"];
            const pages = data["pages"];
            const builtResults = results.map((item) => {
                return {
                    title: item.titulo,
                    path: item.url,
                    description: item.descripcion,
                };
            });
            return {
                pages: pages,
                results: builtResults,
            };
        })
        .catch((err) => {
            console.log(err);
        });
    return fetchResults;
    // const returnedData = data
    //     .map((item) => {
    //         const tt = item.title[0]
    //         let strSimil = 0;
    //         if (tt) {
    //             strSimil = similarity(tt, query);
    //         }
    //         return {
    //             title: item.title,
    //             description: item.description[0][0],
    //             path: item.path,
    //             simil: strSimil,
    //         };
    //     })
    //     .filter((item) => {
    //         if (!item.title || !item.description || item.title.length <= 3) {
    //             return false
    //         }
    //         const lwct = item.title.toLowerCase()
    //         const lwcq = query.toLowerCase();
    //         const lwcd = item.description.toLowerCase()
    //         const exact =
    //             lwct.includes(lwcq) ||
    //             lwcd.includes(lwcq) ||
    //             item.path.includes(lwcq);
    //         if (exact) {
    //             item.simil += 0.8
    //         }
    //         return item.simil >= similCutoff;
    //     }).sort((item) => {
    //         return item.simil
    //     });
    // const pages = Math.ceil(returnedData.length / 20);
    // const returnedPage = returnedData.slice(page * 20, page * 20 + 20);
    // console.log(returnedPage);
    // return {
    //     pages: pages,
    //     results: returnedPage,
    // };
};

export default doSearch;
