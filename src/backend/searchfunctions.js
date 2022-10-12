import getCsvData from "./Trial"

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
 
const doSearch =(query, page) => {
    if (!page)
        page = 1;
    const results = getCsvData(query)
    return {
        pages: 1,
        results: results
    };
}

export default doSearch;
