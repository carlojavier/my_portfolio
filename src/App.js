import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';

const HomeScreen = () => {
  return (
    <div>
      <img src={""} />
      <h1>Welcome to my portfolio</h1>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomeScreen} />
      </Router>

    </div>
  );
}

export default App;
