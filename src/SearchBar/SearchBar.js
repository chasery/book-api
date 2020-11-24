import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="SearchBar">
        <label htmlFor="Search">Search:</label>
        <input id="Search" type="text" placeholder="Search books" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
