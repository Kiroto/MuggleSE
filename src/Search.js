import "./common.css";

const Search = () => {
    return (
        <div class="vflex fgrow">
            <div class="hflex topbar">Top Bar</div>
            <div class="vflex fgrow center">
                <h1 class="albot hcenter">
                    <span class="multicolorlight sfont">Muggle</span>
                </h1>
                <input
                    id="searchBar"
                    class="mainSearch hcenter"
                    type="text"
                    placeholder="Let's get searchin'"
                />
                <button id="searchButton" class="altop hcenter">
                    <span class="multicolordark sfont">Muggle</span> Search
                </button>
            </div>
            <div class="hflex botbar">Bottom bar</div>
        </div>
    );
};

export default Search;
