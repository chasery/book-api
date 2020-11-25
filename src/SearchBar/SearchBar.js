import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  search = (e) => {
    e.preventDefault();
    console.log(this.props.handleSearch(this.inputValue.value));
    this.props.handleSearch(this.inputValue.value);
  };
  render() {
    return (
      <form className="SearchBar" onSubmit={this.search}>
        <label htmlFor="Search">Search:</label>
        <input
          id="Search"
          type="text"
          placeholder="Search books"
          ref={function (node) {
            this.inputValue = node;
          }.bind(this)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
