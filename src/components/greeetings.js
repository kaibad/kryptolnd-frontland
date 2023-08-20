import React from "react";
import { Link, NavLink } from "react-router-dom";
import GreetingIcon from "../assets/images/greeting-icon.png";
import Sphere from "../assets/images/greeting-sphere.png";
export default function GreetingsSection() {
  return (
    <section className="greeting">
      <div className="container">
        <div className="section-title">
          <h4>
            Welcome to <span>Cryptoland</span>
          </h4>
          <img src={GreetingIcon} alt="" />
          <p>
            At Cryptoland, we believe in the transformative power of blockchain
            technology and its potential to revolutionize the way we interact,
            transact, and create value. Whether you are a seasoned trader, a
            curious learner, or a tech-savvy explorer, this is the perfect place
            to quench your thirst for knowledge and explore the ever-evolving
            landscape of cryptocurrencies.
          </p>
          <NavLink to="/about">Learn More</NavLink>
          <div className="greeting-sphere sphere1">
            <img src={Sphere} alt="" />
          </div>
          <div className="greeting-sphere sphere2">
            <img src={Sphere} alt="" />
          </div>
          <div className="greeting-sphere sphere3">
            <img src={Sphere} alt="" />
          </div>
          <div className="greeting-sphere sphere4">
            <img src={Sphere} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
