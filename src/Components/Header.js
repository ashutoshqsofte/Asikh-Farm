import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
         {/* Logo Section  */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>

        {/* Navbar Links */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-item">Home</a>
            </li>
            <li>
              <a href="#products" className="nav-item">Products</a>
            </li>
            <li>
              <a href="#about" className="nav-item">About Us</a>
            </li>
            <li>
              <a href="#contact" className="nav-item">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
