import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./component/layout/Header";
import TrainerDashboard from "./component/TrainerDashboard";
import AddAssignment from "./component/assignments/AddAssignment";
import GetAssignments from "./component/assignments/GetAssignments";
import ListAssignments from "./component/assignments/ListAssignments";
import UpdateAssignment from "./component/assignments/UpdateAssignment";
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
     <Header/>
    
    <Route path="/trainerDashboard" component={TrainerDashboard} />
    <Route path="/addAssignment" component={AddAssignment} />
    <Route path="/getAssignment" component={GetAssignments} />
    <Route path="/listAssignment" component={ListAssignments} />
    <Route path="/updateAssignment/:id" component={UpdateAssignment} />
    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
