import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Editor from "./components/Documents/Editor";
import UpdateDocument from "./components/Documents/UpdateDocument";
import Dashboard from "./components/Doashboard";
import ListDocument from "./components/Documents/ListDocument";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/addDocument" component={Editor} />
        <Route path="/updateDocument/:documentId" component={UpdateDocument} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/listDocument" component={ListDocument} />
      </Router>
    </Provider>
  );
}

export default App;
