import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-left">
        <p>Copyright 2024</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
