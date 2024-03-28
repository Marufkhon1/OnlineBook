import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import NotFoundImage from 'C:/Users/mmman/OnlineBook/frontend/src/assets/imgs/unnamed.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section-1">
        <div className="logo-info">
          <img src={NotFoundImage} alt="Logo" className="footer-logo" />
          <p>Address: 123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="social-links">
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="middle-section-1">
        <h2>Company</h2>
        <ul className="footer-nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a to="/books">Books</a>
          </li>
          <li>
            <a to="/new-releases">New Releases</a>
          </li>
          <li>
            <a to="/contact">Contact Us</a>
          </li>
          <li>
            <a to="/blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="right-section-1">
        <h2>Important Links</h2>
        <ul className="important-links">
          <li>
            <a to="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a to="/faqs">FAQs</a>
          </li>
          <li>
            <a to="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>&copy; 2022 Arihant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
