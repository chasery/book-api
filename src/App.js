import React from "react";
import Header from "./Header/Header";
import SearchControls from "./SearchControls/SearchControls";
import ResultsList from "./ResultsList/ResultsList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filter: { printType: "All", bookType: "" },
      results: [],
    };
  }

  handleSearch(searchTerm) {
    console.log("update search term");
  }

  handleFilter(filter) {
    const { filterName, filterValue } = filter;
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        [filterName]: filterValue,
      },
    }));
  }

  render() {
    return (
      <main className="App">
        <Header />
        <SearchControls
          searchTerm={this.state.searchTerm}
          handleSearch={(searchTerm) => this.handleSearch(searchTerm)}
          filter={this.state.filter}
          handleFilter={(filter) => this.handleFilter(filter)}
        />
        <ResultsList results={this.state.reuslts} filter={this.state.filter} />
      </main>
    );
  }
}

export default App;
