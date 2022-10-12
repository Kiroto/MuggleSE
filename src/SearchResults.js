import React from "react";
import SearchResult from "./SearchResult.js";
import doSearch from "./backend/searchfunctions.js";
import "./common.css";
import Pagination from "./Pagination.js";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        const backendResults = doSearch(params.q, params.p);
        const searchResults = backendResults.results.map((info, idx) => {
            return (
                <SearchResult
                    path={info.path}
                    title={info.title}
                    description={info.description}
                    key={idx}
                />
            );
        });
        return (
            <div class="vflex fgrow">
                <div class="topbar"></div>
                <div class="fgrow">
                    <div class="searchQuery">
                        <a href="/">
                            <span class="multicolorlight sfont smallLogo">
                                Muggle
                            </span>
                        </a>
                        <input
                            id="searchBar"
                            class="querySearch hcenter"
                            type="text"
                            placeholder="Let's get searchin'"
                            onChange={this.handleChange}
                        />
                    </div>
                    <hr />
                    <div class="searchResults vflex">{searchResults}</div>
                </div>
                <Pagination
                    maxPages={backendResults.pages}
                    currentPage={params.p}
                />
                <div class="hflex botbar">Bottom bar</div>
            </div>
        );
    }
}

export default SearchResults;
