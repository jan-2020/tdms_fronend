import React from 'react';
import './App.css';
import LandingPage from './components/project/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import TraineeDashboard from './components/TraineeDashboard';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
function App() {
  return (
      <Provider store={store}>
      
      <Router>
      <LandingPage/>
      <Route path="/" component={LandingPage} />
      <Route path="/traineeDashboard" component={TraineeDashboard} />
      </Router>
      </Provider>
    
  );
}

export default App;
