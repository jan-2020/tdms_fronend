import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ViewDocument from "./components/lists/ViewDocument";
import Assignment from "./components/Assignment";
import ViewAssignment from "./components/lists/ViewAssignment";
import Document from "./components/Document";
import Footer from "./components/layout/Footer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          <Route path="/assignments" component={Assignment} />
          <Route path="/documents" component={Document} />
          
        <Route path="/document/:id" component={ViewDocument} />
          <Route path="/viewAssignment/:id" component={ViewAssignment} />
       <Footer/>
       </Router>
      </Provider>
    );
  }
}

export default App;