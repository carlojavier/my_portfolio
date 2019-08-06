import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-container">
    <div className="nav-logo-container">
      <div className="title">
      <Link to={'/'}>
        <h1 className="nav-logo">carlo javier.</h1>
      </Link>
      </div>
      <div className="nav-links">
        <div className="about">about</div>
        <div className="projects">projects</div>
        <div className="writing">writing</div>
        <div className="contact">contact</div>
      </div>
    </div>
    </nav>

  )
}

export default NavBar;