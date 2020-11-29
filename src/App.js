import React from "react";
import Header from "./Header/Header";
import SearchControls from "./SearchControls/SearchControls";
import ResultsList from "./ResultsList/ResultsList";
import "./App.css";

// API info
const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyB58oCjdQDEC5HyeJRSkgS8VJY8sHsXXho";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filters: { printType: "All", bookType: "No Filter" },
      results: { items: [] },
      error: "",
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

  createQueryString(searchTerm, key) {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    return "?q=" + encodedSearchTerm + "&key=" + key;
  }

  handleSubmit(event) {
    const queryString = this.createQueryString(this.state.searchTerm, apiKey);
    const url = apiUrl + queryString;
    event.preventDefault();
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((json) => {
        this.setState({
          results: json,
        });
      })
      .catch((status) => {
        this.setState({
          error: status,
        });
      });
  }

  render() {
    return (
      <main className="App">
        <Header />
        <SearchControls
          searchTerm={this.state.searchTerm}
          filters={this.state.filters}
          handleInputChange={(event) => this.handleInputChange(event)}
          handleSubmit={(event) => this.handleSubmit(event)}
        />
        <ResultsList
          results={this.state.results}
          filters={this.state.filters}
        />
      </main>
    );
  }
}

export default App;
