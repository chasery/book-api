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
      filters: { printType: "All", bookType: "No Filter" },
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "printType" || name === "bookType") {
      this.setState((prevState) => ({
        filters: {
          ...prevState.filters,
          [name]: value,
        },
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    return (
      <main className="App">
        <Header />
        <SearchControls
          searchTerm={this.state.searchTerm}
          handleInputChange={(event) => this.handleInputChange(event)}
          filters={this.state.filters}
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
