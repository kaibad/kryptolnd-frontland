import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
function Header() {
  return (
    <header>
      <div className="container">
        <ul className="row">
          <div className="col-sm-3">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-sm-9">
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/services">Services</NavLink>
                </li>

                <li className="navbar-item">
                  <NavLink to="/team">Team</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="/buy-token">Buy token</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink to="./cryptoland-more">Learn more</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </ul>
      </div>
    </header>
  );
}
export default Header;
