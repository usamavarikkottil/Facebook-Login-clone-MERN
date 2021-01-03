import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Brand from './components/Brand'
import LoginBox from './components/LoginBox'
import RegisterBox from './components/RegisterBox'


function App() {
  return (
    <Router>
      <div className="app">
        <Brand />
        <Route path="/login" component={LoginBox} />
        <Route path="/register" component={RegisterBox} />


      </div>
    </Router>
  );
}

export default App;
