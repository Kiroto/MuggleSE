import React from "react";
import SearchResult from "./SearchResult.js";
import doSearch from "./backend/searchfunctions.js";
import "./common.css";
import Pagination from "./Pagination.js";
import { Link } from "react-router-dom";


class SearchResults extends React.Component {
    constructor(props) {
        super();
        this.state = {
            results: [],
            pages: 0,
            currentPage: 1,
            currentQuery: "",
        };
    }

    render() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        if (
            params.p != this.state.currentPage ||
            params.q != this.state.currentQuery
        ) {
            doSearch(params.q, params.p).then((data) => {
                this.setState({
                    currentPage: params.p,
                    currentQuery: params.q,
                    pages: data.pages,
                    results: data.results.map((info, idx) => {
                        return (
                            <SearchResult
                                path={info.path}
                                title={info.title}
                                description={info.description}
                                key={idx}
                            />
                        );
                    }),
                });
            });
        }
        // const searchResults = backendResults.results.map((info, idx) => {
        //     return (
        //         <SearchResult
        //             path={info.path}
        //             title={info.title}
        //             description={info.description}
        //             key={idx}
        //         />
        //     );
        // });
        return (
            <div class="vflex fgrow">
                <div class="topbar"></div>
                <div class="fgrow">
                    <div class="searchQuery">
                        <Link
                            to={{
                                pathname: `/`,
                            }}
                            className="altop hcenter"
                        >
                            <span class="multicolorlight sfont smallLogo">
                                Tarot
                            </span>
                        </Link>
                        <input
                            id="searchBar"
                            class="querySearch hcenter"
                            type="text"
                            placeholder="What is thy web destination?"
                            onChange={this.handleChange}
                        />
                    </div>
                    <hr />
                    <div class="searchResults vflex">{this.state.results}</div>
                </div>
                <Pagination
                    maxPages={this.state.pages}
                    currentPage={params.p}
                />
                <div class="hflex botbar">Bottom bar</div>
            </div>
        );
    }
}

export default SearchResults;
