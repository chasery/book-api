import React from "react";
import "./Filter.css";

class Filter extends React.Component {
  renderOptions(options) {
    return options.map((option, i) => {
      return (
        <option key={i} value={option}>
          {option}
        </option>
      );
    });
  }

  render() {
    const { stringName, name, options, handleInputChange, value } = this.props;

    return (
      <div className="Filter">
        <label htmlFor={name}>{stringName}:</label>
        <select
          name={name}
          id={name}
          onChange={handleInputChange}
          value={value}
        >
          {this.renderOptions(options)}
        </select>
      </div>
    );
  }
}

export default Filter;
