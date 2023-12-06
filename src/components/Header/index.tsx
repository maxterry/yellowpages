import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../ThemeContext";

import logo from "../../assets/logo.svg";
import logoLight from "../../assets/logo-light.svg";

import { CompanyData } from "../CompanyData";
import { TagData } from "../TagData";

import "./style.css";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className={darkMode ? "darkMode" : "lightMode"}>
        <h1>
          <Link to="/">
            <div className="logo">
              {darkMode ? (
                <img src={logo} alt="Logo" />
              ) : (
                <img src={logoLight} alt="Logo" />
              )}
            </div>
          </Link>
        </h1>
        <div className="search">
          <input
            type="text"
            placeholder={
              "Search " +
              CompanyData.length +
              " companies and " +
              TagData.length +
              " tags"
            }
          />
        </div>
        <div className="nav-toggle-mode">
          {darkMode ? (
            <FiSun onClick={toggleTheme} />
          ) : (
            <FiMoon onClick={toggleTheme} />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
