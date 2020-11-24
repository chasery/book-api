import React from "react";
import Result from "../Result/Result";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render() {
    return (
      <section className="ResultsList">
        <ul>
          <Result />
          <Result />
          <Result />
        </ul>
      </section>
    );
  }
}

export default ResultsList;
