import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="SearchBar" onSubmit={this.search}>
        <label htmlFor="Search">Search:</label>
        <input
          id="Search"
          name="searchTerm"
          type="text"
          placeholder="Search books"
          onChange={this.props.handleInputChange}
          value={this.props.searchTerm}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
