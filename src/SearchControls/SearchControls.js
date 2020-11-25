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
          handleSearch={this.props.handleSearch}
        />
        <FilterGroup
          filters={this.props.filters}
          handleFilter={this.props.handleFilter}
        />
      </section>
    );
  }
}

export default SearchControls;
