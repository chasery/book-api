import React from "react";
import Filter from "../Filter/Filter";
import { camelize } from "../camelize";
import "./FilterGroup.css";

class FilterGroup extends React.Component {
  render() {
    return (
      <div className="FilterGroup">
        <Filter
          stringName={"Print Type"}
          name={camelize("Print Type")}
          options={["All", "Books", "Magazines"]}
          handleInputChange={this.props.handleInputChange}
          value={this.props.filters.printType}
        />
        <Filter
          stringName={"Book Type"}
          name={camelize("Book Type")}
          options={[
            "No Filter",
            "Partial",
            "Full",
            "Free eBooks",
            "Paid eBooks",
            "eBooks",
          ]}
          handleInputChange={this.props.handleInputChange}
          value={this.props.filters.bookType}
        />
      </div>
    );
  }
}

export default FilterGroup;
