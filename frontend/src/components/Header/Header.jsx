import React, { useState } from 'react';
import './Header.css';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Eco2<span>Fix</span></h1>
      </div>

      {/* Hamburger / Cross icon for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuActive ? <FaTimes className="close-icon" /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${menuActive ? 'active' : ''}`} aria-label="Main navigation">
        <ul className="nav-links">
          <li><a href="#home" aria-label="Home page" className="nav-link">Home</a></li>
          <li><a href="#about" aria-label="About page" className="nav-link">About</a></li>
          <li><a href="#exchange" aria-label="Exchange page" className="nav-link">Exchange</a></li>
          <li><a href="#contact" aria-label="Contact page" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Icons Section */}
      <div className="icon-links">
        <a href="#wishlist" aria-label="Wishlist" className="icon-link"><FaRegHeart /></a>
        <a href="#profile" aria-label="Profile" className="icon-link"><CgProfile /></a>
      </div>
    </header>
  );
};

export default Header;
