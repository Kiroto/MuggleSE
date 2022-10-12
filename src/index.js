import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/search" element={<SearchResults />} />
        </Routes>
    </Router>
);