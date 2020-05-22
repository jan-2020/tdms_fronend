import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./component/layout/Header'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SidePanel from './component/SidePanel'
import Heading from './component/Heading'
import CardFormModule from './component/CardFormModule'
import Dashboard from './component/Dashboard'



function App() {
  return (
    <Router>
      <Header/>
      <Route path="/Dashboard" component={Dashboard}/>
    <CardFormModule/>
    </Router>
  );
}

export default App;
