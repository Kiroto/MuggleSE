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
    }

    render() {
        return (
            <div className="vflex fgrow">
                <div className="hflex topbar">Top Bar</div>
                <div className="vflex fgrow center">
                    <h1 className="albot hcenter">
                        <span className="multicolorlight sfont">Tarot</span>
                    </h1>
                    <input
                        id="query"
                        className="mainSearch hcenter"
                        type="text"
                        placeholder="What is thy web destination?"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <Link
                        to={{
                            pathname: `/search`,
                            search: `?q=${this.state.query}`,
                        }}
                        className="button altop hcenter"
                    >
                        <span className="multicolordark sfont">Tarot</span>{" "}
                        Search
                    </Link>
                    {/* <button id="searchButton" class="altop hcenter"></button> */}
                </div>
                <div className="hflex botbar">Bottom bar</div>
            </div>
        );
    }
}

export default Search;
