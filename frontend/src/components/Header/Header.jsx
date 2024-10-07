// Header.js
import React from 'react';
import './Header.css';

/**
 * Header component that displays the application's logo, search bar, and navigation links.
 *
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Eco2<span>Fix</span></h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for parts..."
          aria-label="Search input"
          className="search-input"
        />
        <button
          type="button"
          aria-label="Search button"
          className="search-button"
        >
          Search
        </button>
      </div>
      <nav className="navbar" aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <a href="#home" aria-label="Home page" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" aria-label="About page" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#exchange" aria-label="Exchange page" className="nav-link">
              Exchange
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="Contact page" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;