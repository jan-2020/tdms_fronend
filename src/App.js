import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store';
import LandingPage from './components/projects/LandingPage';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="container">
        <LandingPage/>
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
