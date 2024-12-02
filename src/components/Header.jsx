// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Header = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/" className="my-link">
          <img src="/icon.png" alt="Career Waves Institute Logo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>

      {/* Navbar */}
      <nav>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="my-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="my-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/universities" className="my-link">
              Universities
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="my-link">
              Contact Us
            </Link>
          </li>
          {user ? (
            <li className="user-info">
              <span className="welcome-user">Welcome, {user.name}!</span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register" className="my-link">
                  <button className="register-btn">Register</button>
                </Link>
              </li>
              <li>
                <Link to="/login" className="my-link">
                  <button className="login-btn">Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
