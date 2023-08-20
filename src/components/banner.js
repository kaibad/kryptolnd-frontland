import React from "react";
import Slider from "react-slick";
import Banner1 from "../assets/images/banner-image-1.png";
import Banner2 from "../assets/images/banner-image-2.png";
import Banner3 from "../assets/images/banner-image-3.png";
export default function BannerSection() {
  var Slidersettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    fade: true,
  };
  const serviceSliders = [
    {
      thaumbnail: Banner1,
    },
    {
      thaumbnail: Banner2,
    },
    {
      thaumbnail: Banner3,
    },
  ];
  return (
    <section className="banner">
      <Slider {...Slidersettings}>
        {serviceSliders.map((item, index) => {
          return (
            <div key={index} className="item">
              <img src={item.thaumbnail} alt={index} />
            </div>
          );
        })}
      </Slider>

      {/* <img src={Banner1} alt="banner" /> */}
    </section>
  );
}
