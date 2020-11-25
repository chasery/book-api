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
      filters: { printType: "All", bookType: "" },
      results: [],
    };
  }

  handleSearch(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  handleFilter(filters) {
    const { filterName, filterValue } = filters;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
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
          filters={this.state.filters}
          handleFilter={(filters) => this.handleFilter(filters)}
        />
        <ResultsList
          results={this.state.reuslts}
          filters={this.state.filters}
        />
      </main>
    );
  }
}

export default App;
