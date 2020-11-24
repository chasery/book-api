import React from "react";
import "./Filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="Filter">
        <label htmlFor="Filter">Filter:</label>
        <select id="Filter">
          <option value="">Filter</option>
        </select>
      </div>
    );
  }
}

export default Filter;
