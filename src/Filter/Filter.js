import React from "react";
import slugify from "slugify";
import "./Filter.css";

class Filter extends React.Component {
  updateFilter(filterName, filterValue) {
    this.props.handleFilter({ filterName, filterValue });
  }

  camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  render() {
    const { name, options } = this.props;
    const camelName = this.camelize(name);

    return (
      <div className="Filter">
        <label htmlFor={name ? slugify(name) : ""}>{name}:</label>
        <select
          id={name ? slugify(name) : ""}
          onChange={(e) => this.updateFilter(camelName, e.target.value)}
        >
          <option value="Filter1">Filter1</option>
          <option value="Filter2">Filter2</option>
          <option value="Filter3">Filter3</option>
        </select>
      </div>
    );
  }
}

export default Filter;
