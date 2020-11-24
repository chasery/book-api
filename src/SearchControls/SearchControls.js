import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterGroup from "../FilterGroup/FilterGroup";
import "./SearchControls.css";

class SearchControls extends React.Component {
  render() {
    return (
      <div className="SearchControls">
        <SearchBar />
        <FilterGroup />
      </div>
    );
  }
}

export default SearchControls;
