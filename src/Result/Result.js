import React from "react";
import "./Result.css";

class Result extends React.Component {
  render() {
    const { title, authors, image, infoLink, description, price } = this.props;

    const authorString = authors.join(", ");

    return (
      <li className="Result">
        <div className="Result__image">
          <a href={infoLink} target="_blank">
            <img src={image} />
          </a>
        </div>
        <div className="Result__content">
          <h2>{title}</h2>
          <ul className="Result__details">
            <li>Author(s): {authorString}</li>
            <li>Price: {price}</li>
          </ul>
          <p className="Result__description">{description}</p>
        </div>
      </li>
    );
  }
}

export default Result;
