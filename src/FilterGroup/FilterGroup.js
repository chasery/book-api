import React from "react";
import Filter from "../Filter/Filter";
import "./FilterGroup.css";

class FilterGroup extends React.Component {
  render() {
    return (
      <div className="FilterGroup">
        <Filter
          name={"Print Type"}
          //options={}
          handleFilter={this.props.handleFilter}
        />
        <Filter
          name={"Book Type"}
          //options={}
          handleFilter={this.props.handleFilter}
        />
      </div>
    );
  }
}

export default FilterGroup;
