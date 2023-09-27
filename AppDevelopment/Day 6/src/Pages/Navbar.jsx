// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
    <nav className="navbar">
    
      <div className="navbar-container">
        <h1 className="navbar-logo">Logo</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;