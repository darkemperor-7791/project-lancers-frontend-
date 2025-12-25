import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Main Footer Links */}
          <div className="footer-links-section">
            {/* Categories Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Categories</h3>
              <ul className="footer-links">
                <li><a href="#graphics">Graphics & design</a></li>
                <li><a href="#web">Web development</a></li>
                <li><a href="#video">Video & Animation</a></li>
                <li><a href="#app">Application Development</a></li>
                <li><a href="#photo">Photography</a></li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Community</h3>
              <ul className="footer-links">
                <li><a href="#hub">Community Hub</a></li>
                <li><a href="#invite">Invite a friend</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="#help">Help & Support</a></li>
                <li><a href="#reviews">Our reviews</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-links">
                <li><a href="#about">About us</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <span className="footer-social-text">Follow us</span>
            <div className="footer-social-icons">
              <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#linkedin" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#twitter" className="footer-social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <a href="#terms" className="footer-bottom-link">Terms of Service</a>
          <a href="#privacy" className="footer-bottom-link">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
