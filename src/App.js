import React, { Component } from 'react';
import Header from "./components/Header";
import Locations from "./components/Locations"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Locations />
      </div>
    );
  }
}

export default App;
