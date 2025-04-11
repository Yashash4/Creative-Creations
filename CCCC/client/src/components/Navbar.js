import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          Creative Creations
        </div>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Expertise</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
