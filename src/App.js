import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./component/layout/Header";


import ListAssignments from "./component/assignments/ListAssignments";
import AssignmentTable from "./component/assignments/AssignmentTable.js";

import SubmitAssignment from './component/assignments/SubmitAssignment';
import ShowAssignments from './component/assignments/ShowAssignments';
import TraineeDashboard from './component/TraineeDashboard';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
     <Header/>
  
    <Route path="/traineeDashboard" component={TraineeDashboard} />
    <Route path="/listAssignment" component={ListAssignments} />
    <Route path="/assignmentTable" component={AssignmentTable} />
    <Route path="/submitAssignment" component={SubmitAssignment} />
    <Route path="/showAssignment" component={ShowAssignments}/>

    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
