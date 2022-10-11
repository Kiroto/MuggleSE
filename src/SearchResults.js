import React from "react";
import SearchResult from "./SearchResult";
import doSearch from "./backend/searchfunctions";
import "./common.css";

class SearchResults extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        const backendResults = doSearch(params.q, params.p)
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
                        />
                    </div>
                    <hr />
                    <div class="searchResults vflex">{searchResults}</div>
                </div>
                <div class="pagination">
                    <div class="back">Back</div>
                    <div class="page current">1</div>
                    <div class="page">2</div>
                    <div class="page">3</div>
                    <div class="dots">...</div>
                    <div class="page">42</div>
                    <div class="next">Next</div>
                </div>
                <div class="hflex botbar">Bottom bar</div>
            </div>
        );
    }
}

export default SearchResults;
