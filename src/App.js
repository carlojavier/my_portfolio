import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.scss';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'



function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="page-container">
          <Link to="/">Home</Link>
          <Route path="/" exact component={HomePage} />
        </div>

      </div>
    </Router>
  );
}

export default App;
