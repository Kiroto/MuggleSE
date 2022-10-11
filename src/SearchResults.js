import React from "react";
import SearchResult from "./SearchResult";
import "./common.css";

class SearchResults extends React.Component {
    constructor(props) {
        super()
        const params = new URLSearchParams(window.location.search);
        console.log(window.location)
        console.log(this);
    }

    render() {
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
                    <div class="searchResults vflex">
                        <SearchResult path="https://www.google.com/search" title="Google" description="Google search engine!"/>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                        <div class="result">
                            <div class="resultUrl">www.exxample.com</div>
                            <a class="resultTitle" href="www.example.com">
                                ExampleTitle
                            </a>
                            <div class="resultDescription">
                                this is an example thing
                            </div>
                        </div>
                    </div>
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
