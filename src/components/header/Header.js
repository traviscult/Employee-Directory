import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./style.css"



const Header = () => {
    return (
        <div className="header">
           <h1>Employee Directory</h1>
           <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
           {/* <SearchBar
           /> */}
        </div>
    )
}

export default Header;