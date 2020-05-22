import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";
import AdminDashboard from "./components/AdminDashboard";
import AddPermission from "./components/permissions/AddPermission";
import ListPermissions from "./components/permissions/ListPermissions";
import UserModule from "./components/permissions/UserModule";

import ListModules from "./components/permissions/ListModules";


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/> 
    
    <Route path="/Dashboard" component={AdminDashboard} />
    <Route path="/addPermission" component={AddPermission} />
    {/* <Route exact path="/assignpermissions" component={AssignPermissions} /> */}
    <Route path="/listModules" component={ListModules} />
    <Route path="/listpermissions" component={ListPermissions} />
    <Route path="/userModule" component={UserModule} />

    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
