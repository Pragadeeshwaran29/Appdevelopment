import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to='/termsandcondition' className="footer-link">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                About us
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                Contact us
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Connect with Us</h4>
          <ul className="social-icons">
            <li className="social-icons-item">
              <a href="https://www.facebook.com" className="social-icon-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://www.instagram.com" className="social-icon-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://www.twitter.com" className="social-icon-link twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-icons-item">
              <a href="https://www.github.com" className="social-icon-link github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
     <Link to="/termsandcondition"> <p className="copyright">© 2023 All Rights Reserved</p></Link>
    </footer>
  );
}