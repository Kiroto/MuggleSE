import React from "react";
import "./common.css";

import { Link } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ query: evt.target.value });
        console.log(this.state.query);
    }

    render() {
        return (
            <div class="vflex fgrow">
                <div class="hflex topbar">Top Bar</div>
                <div class="vflex fgrow center">
                    <h1 class="albot hcenter">
                        <span class="multicolorlight sfont">Muggle</span>
                    </h1>
                    <input
                        id="query"
                        class="mainSearch hcenter"
                        type="text"
                        placeholder="Let's get searchin'"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <Link
                        to={{
                            pathname: `/search`,
                            search: `?q=${this.state.query}`
                        }}
                        class="button altop hcenter"
                    >
                        <span class="multicolordark sfont">Muggle</span> Search
                    </Link>
                    {/* <button id="searchButton" class="altop hcenter"></button> */}
                </div>
                <div class="hflex botbar">Bottom bar</div>
            </div>
        );
    }
}

export default Search;
