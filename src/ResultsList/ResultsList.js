import React from "react";
import Result from "../Result/Result";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render() {
    const { results, filters } = this.props;
    const resultsList = results.items.map((result) => {
      const {
        title,
        authors,
        imageLinks,
        infoLink,
        description,
        printType,
      } = result.volumeInfo;
      const uppercaseFilter = filters.bookType.toUpperCase();
      console.log(printType + "/" + result.accessInfo.viewability);
      if (
        (printType === filters.printType || filters.printType === "All") &&
        (result.accessInfo.viewability === uppercaseFilter ||
          filters.bookType === "No Filter")
      )
        return (
          <Result
            key={result.id}
            title={title}
            authors={authors}
            image={imageLinks.thumbnail ? imageLinks.thumbnail : ""}
            infoLink={infoLink}
            description={description}
            printType={printType}
            price={
              result.saleInfo.saleability === "FOR_SALE"
                ? result.saleInfo.retailPrice.amount
                : "Free"
            }
          />
        );
    });
    return (
      <section className="ResultsList">
        <ul>{resultsList}</ul>
      </section>
    );
  }
}

export default ResultsList;
