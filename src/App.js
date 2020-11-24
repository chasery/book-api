import React from "react";
import Header from "./Header/Header";
import SearchControls from "./SearchControls/SearchControls";
import ResultsList from "./ResultsList/ResultsList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <SearchControls />
        <ResultsList />
      </main>
    );
  }
}

export default App;
