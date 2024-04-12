// Footer.js
import { Icon } from 'semantic-ui-react';
import React from 'react';
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <a>Contact Information</a><br/>
          <a>Email: NPinteriors@example.com</a><br/>
          <a>Phone: (123) 456-7890</a><br/>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <Icon disabled name='twitter'/>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <Icon disabled name='facebook'/>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <Icon disabled name='instagram'/>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          Instagram
          </a>
        </div>
      </div>
    </footer>
    <p className="footer-a">&copy; 2023 NP Solutions. All rights reserved.</p>
    </>
  );
};

export default Footer;
