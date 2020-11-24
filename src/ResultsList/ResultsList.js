import React from "react";
import Result from "../Result/Result";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render() {
    return (
      <div className="ResultsList">
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

export default ResultsList;
