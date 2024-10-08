import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Eco2Fix</h3>
          <p>
            Eco2Fix is dedicated to reducing electronic waste by connecting individuals and shopkeepers for the exchange of old electronics. Join us in promoting sustainable living!
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#exchange">Exchange</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@ecocycle.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 EcoCycle. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
