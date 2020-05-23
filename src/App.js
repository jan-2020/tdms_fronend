import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import ListDocument from "./components/Documents/ListDocument";

import LeftMenu from "./components/layout/LeftMenu";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <LeftMenu />
          <Footer />
          
          <Route path="/listDocument" component={ListDocument} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
