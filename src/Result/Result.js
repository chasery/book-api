import React from "react";
import "./Result.css";

class Result extends React.Component {
  render() {
    return (
      <li className="Result">
        <div className="Result__image">
          <img src="https://via.placeholder.com/200x300" />
        </div>
        <div className="Result__content">
          <h2>Result Heading</h2>
          <ul className="Result__details">
            <li>Author: Test Test</li>
            <li>Price: $50.00</li>
          </ul>
          <p className="Result__description">
            The resulting volume is one that will be welcomed by students and
            general readers alike.
          </p>
        </div>
      </li>
    );
  }
}

export default Result;
