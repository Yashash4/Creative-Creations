import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use simple text or HTML entities as fallback
  const menuIcon = menuOpen ? "✕" : "☰";

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="brand-main">Creative Creations</span>
        <span className="brand-main">Clothing Company</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuIcon}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;