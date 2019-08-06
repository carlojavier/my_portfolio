import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-container">
    <div className="nav-logo-container">
      <Link to={'/'}>
        <h1 className="nav-logo">carlo javier.</h1>
      </Link>
      <div className="nav-links">
        <span className="about">about</span>
        <span className="projects">projects</span>
        <span className="writing">writing</span>
        <span className="contact">contact</span>
      </div>
    </div>
    </nav>

  )
}

export default NavBar;