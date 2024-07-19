import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";

const h1 = `immersive experiences that deliver`;

const Navbar = ({ isActive, toggleActive }) => {
  return (
    <>
      <nav>
        <div className="containerr">
          <div className="navWrapper">
            <div className="logo">
              <img src={logo} alt="logoimg" />
            </div>
            <div className={`navLink ${isActive ? "navLink-active" : ""}`}>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Events</a>
              <a href="#">Product</a>
              <a href="#">Support</a>
            </div>

            <button className={`hamburgerButton ${isActive ? "active" : ""}`} onClick={toggleActive}>
              <img src={isActive ? iconClose : hamburger} alt="hamburgerButton" />
            </button>
          </div>

          <div className="offeringParent">
            <div className="offeringChild">
              <h1 className={`offering ${isActive ? "offering-active" : ""}`}>{h1}</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
