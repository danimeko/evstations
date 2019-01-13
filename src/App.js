import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Locations from "./components/Locations";
import Header from "./components/Header"
import "./App.css";
import { Provider } from "react-redux"
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/stations" component={Locations} />
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
