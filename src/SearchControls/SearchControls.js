import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterGroup from "../FilterGroup/FilterGroup";
import "./SearchControls.css";

class SearchControls extends React.Component {
  render() {
    return (
      <section className="SearchControls">
        <SearchBar
          searchTerm={this.props.searchTerm}
          handleInputChange={this.props.handleInputChange}
        />
        <FilterGroup
          filters={this.props.filters}
          handleInputChange={this.props.handleInputChange}
        />
      </section>
    );
  }
}

export default SearchControls;
