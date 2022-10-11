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
const doSearch = (query, page) => {
    if (!page) page = 1
    // TODO: Actually implement the function. This is placeholder data
    console.log(page)
    return {
        pages: 1,
        results: [
        {
            path: "https://www.google.com/search",
            title: "Google",
            description: "Look for your website in google!",
        },
        {
            path: "https://www.kongregate.com/games/gfdg",
            title: "Kongregate",
            description: "Play your favourite flash games!",
        },
        {
            path: "https://www.youtube.com",
            title: "YouTube",
            description: "Watch free online videos!",
        },
        {
            path: "https://www.example.com",
            title: "Example",
            description: "A website used for examples!",
        },
    ]};
};

export default doSearch;
