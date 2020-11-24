import React from "react";
import Filter from "../Filter/Filter";
import "./FilterGroup.css";

class FilterGroup extends React.Component {
  render() {
    return (
      <div className="FilterGroup">
        <Filter />
        <Filter />
      </div>
    );
  }
}

export default FilterGroup;
