import React from "react";
import "./common.css";

class SearchResult extends React.Component {
    constructor({path, title, description}) {
        super();
        this.state = {path: path, title: title, description: description}
    }
    render() {
        return (
            <div class="result">
                <div class="resultUrl">
                    <span class="rootPage">
                        <a href={this.state.path}>{this.state.path}</a>
                    </span>
                    <span class="subpage">
                        <a href={this.state.path}>{this.state.path}</a>
                    </span>
                </div>
                <a class="resultTitle" href={this.state.path}>
                    {this.state.title}
                </a>
                <div class="resultDescription">{this.state.description}</div>
            </div>
        );
    }
}

export default SearchResult;
