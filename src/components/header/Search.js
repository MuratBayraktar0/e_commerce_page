import React from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="searchBar">
      <BiSearch size="20px" style={{ marginLeft: "5px" }} />
      <input type="text" />
      <div className="searchButton">Searh</div>
    </div>
  );
}

export default Search;
