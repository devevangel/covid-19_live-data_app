import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardListComponent/CardList";
import SearchBox from "../components/SearchBarComponent/SearchBox";

class App extends Component {
  state = {
    countries: [],
    searchfield: "",
  };

  componentDidMount() {
    document.title = "Covid-19 App";
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((data) => data.json())
      .then((results) => {
        this.setState({ countries: results });
      });
  }

  handleOnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };


  render() {

    const filter = this.state.countries.filter(country => {
      return(          
          country.country.toLowerCase().includes(this.state.searchfield.toLowerCase())
      );
    });

    if (!this.state.countries.length) {
      return <h1 className="tc f1">Loading...</h1>;
    } else {
      return (
        <div className="App">
          <title>my-app</title>
          <SearchBox onSearchChange={this.handleOnSearchChange} />
          <CardList countries={filter} />
        </div>
      );
    }
  }
}

export default App;
