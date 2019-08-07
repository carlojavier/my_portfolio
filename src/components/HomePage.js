import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="about-title">
      <h1>about me</h1>
      </div>
      <div className="about-container">
        <p>Hello, my name is Carlo, welcome to my website.
          I just recently started this with React. Hopefully,
          it groes into something nice. I'm thinking of 
          combining my project and writing work together
          into one comprehensive portfolio. We'll
          see how it goes... I guess.
        </p>
      </div>
    </div>

  )
}

export default HomePage;