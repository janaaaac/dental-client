import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>
          <strong>Phone:</strong> +94 76 123 4567
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:dentalnetlk@gmail.com">dentalnetlk@gmail.com</a>
        </p>
      </div>
      <div className="footer-logo">
        <h3>DentalNet</h3>
      </div>
    </footer>
  );
}

export default Footer;
