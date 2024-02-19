import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <h2 className="company-name">SuperNet</h2>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Edge Network</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <div className="cta_sign_up">
              <a href="#" className="login_btn">
                Sign Up
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
