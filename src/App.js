import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/pendingrequests" component={Dashboard} />
         </Router>
         <Footer/>
      </Provider>
    );
  }
}

export default App;
