import React, { Component } from "react";
import './searchbox.css';

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div className="pa2 sticky z-1 mb3 tc">
        <input
          className="pa3 ba b--blue bg-lightest-blue"
          type="search"
          placeholder="Search Countries"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
