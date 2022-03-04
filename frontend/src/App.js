import React, { Component } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList.js"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductsList />
        {/* <div className="App-main">List of Scooters Goes Here</div> */}
      </div>
    );
  }
}

export default App;
