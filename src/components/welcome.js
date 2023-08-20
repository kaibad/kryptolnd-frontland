import React from "react";
import { Link, NavLink } from "react-router-dom";
import WelcomeThumbnail from "../assets/images/welcome-thumbnail.png";

export default function WelcomeSection() {
  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <div className=" col-xl-6 col-sm-6 col-12">
            <div className="welcome-content">
              <h2>Crypto currency is a Digital asset design To work.</h2>
              <p>
                Collaboratively engineer impactful niches for business
                dramatically crossunit.
              </p>
              <NavLink to="/about">About Us</NavLink>
            </div>
          </div>
          <div className="col-xl-6 col-sm-6 col-12">
            <div className="welcome-thumbnail">
              <img src={WelcomeThumbnail} alt="Welcome-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
