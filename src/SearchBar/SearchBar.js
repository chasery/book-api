import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="SearchBar" onSubmit={this.props.handleSubmit}>
        <label htmlFor="Search">Search:</label>
        <input
          id="Search"
          name="searchTerm"
          type="text"
          placeholder="Search books"
          onChange={this.props.handleInputChange}
          value={this.props.searchTerm}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
