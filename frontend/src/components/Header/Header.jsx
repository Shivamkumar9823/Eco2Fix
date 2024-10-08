import React, { useState } from 'react';
import './Header.css';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Eco2<span>Fix</span></h1>
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />} {/* Toggle between Hamburger and Close icon */}
      </div>

      {/* Navigation Links */}
      <nav className={`navbar ${menuOpen ? 'active' : ''}`} aria-label="Main navigation">
        {menuOpen && ( // Show close icon and nav items only when the menu is open
          <>
            <div className="menu-header">
              <AiOutlineClose className="close-icon" onClick={toggleMenu} /> {/* Close icon */}
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home" aria-label="Home page" className="nav-link">Home</a>
              </li>
              <li>
                <a href="#about" aria-label="About page" className="nav-link">About</a>
              </li>
              <li>
                <a href="#exchange" aria-label="Exchange page" className="nav-link">Exchange</a>
              </li>
              <li>
                <a href="#contact" aria-label="Contact page" className="nav-link">Contact</a>
              </li>
            </ul>
          </>
        )}
      </nav>

      {/* Icon Links */}
      <div className="icon-links">
        <a href="#wishlist" aria-label="Wishlist" className="icon-link"><FaRegHeart /></a> 
        <a href="#profile" aria-label="Profile" className="icon-link"><CgProfile /></a>
      </div>
    </header>
  );
};

export default Header;
