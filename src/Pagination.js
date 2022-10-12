import React from "react";
import updateQueryStringParameter from "./utils.js";
import "./common.css";

class Pagination extends React.Component {
    constructor({ maxPages, currentPage }) {
        super();
        if (!currentPage) currentPage = 1;
        this.state = {
            maxPages: parseInt(maxPages),
            currentPage: parseInt(currentPage),
        };
    }
    render() {
        const pages = [...Array(this.state.maxPages).keys()].map((k) => {
            const classes = ["page"];
            console.log(this.state.currentPage);
            if (k + 1 === this.state.currentPage) {
                classes.push("current");
            }
            const nwLink = updateQueryStringParameter(
                window.location.search,
                "p",
                k + 1
            );
            return (
                <a href={nwLink}>
                    <div class={classes.join(" ")}>{k + 1}</div>
                </a>
            );
        });
        const bklink = updateQueryStringParameter(
            window.location.search,
            "p",
            this.state.currentPage - 1
        );
        const fwlink = updateQueryStringParameter(
            window.location.search,
            "p",
            this.state.currentPage + 1
        );
        return (
            <div class="pagination">
                <a href={bklink}>
                    <div class="page back">Back</div>
                </a>
                {pages}
                <a href={fwlink}>
                    <div class="page next">Next</div>
                </a>
            </div>
        );
    }
}

export default Pagination;
