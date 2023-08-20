import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import services_image_1 from "../assets/images/services1.png";
import services_image_2 from "../assets/images/services2.png";
import services_image_3 from "../assets/images/services3.png";
export default function ServicesSection() {
  const ServicesSlidersettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ServicesSlider = [
    {
      thumbnail: services_image_1,
      title: "Educational Webinars:",
      description:
        "Learn about blockchain, trading strategies, and market trends through engaging webinars, enhancing your crypto trading knowledge and skills.",
    },
    {
      thumbnail: services_image_2,
      title: "Crypto Trading:",
      description:
        "Trade a variety of cryptocurrencies with real-time market analysis, advanced charting, and secure transactions for optimal gains.",
    },
    {
      thumbnail: services_image_3,
      title: "Portfolio Management:",
      description:
        "Expertly manage and diversify your crypto holdings, with personalized strategies and automated rebalancing for long-term success.",
    },
    {
      thumbnail: services_image_1,
      title: "Educational Webinars:",
      description:
        "Learn about blockchain, trading strategies, and market trends through engaging webinars, enhancing your crypto trading knowledge and skills.",
    },
    {
      thumbnail: services_image_2,
      title: "Crypto Trading:",
      description:
        "Trade a variety of cryptocurrencies with real-time market analysis, advanced charting, and secure transactions for optimal gains.",
    },
    {
      thumbnail: services_image_3,
      title: "Portfolio Management:",
      description:
        "Expertly manage and diversify your crypto holdings, with personalized strategies and automated rebalancing for long-term success.",
    },
  ];
  return (
    <section className="service">
      <div className="container">
        <div className="section-title">
          <h4>
            Our <span>Services</span>
          </h4>
        </div>
        <div className="section-content">
          <Slider {...ServicesSlidersettings}>
            {ServicesSlider.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="services-item">
                    <img src={item.thumbnail} alt={index} />
                    <div className="services-content">
                      <h4>{item.title} </h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="services-button">
            <NavLink to="/token-sell">View all Services</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
