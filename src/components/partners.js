import React from "react";
// import { NavLink } from "react-router-dom";
import Partner1 from "../assets/images/partner-1.png";
import Partner2 from "../assets/images/partner-2.png";
import Partner3 from "../assets/images/partner-3.png";
import Partner4 from "../assets/images/partner-4.png";
import Partner5 from "../assets/images/partner-5.png";
import Partner6 from "../assets/images/partner-6.png";
import Partner7 from "../assets/images/partner-7.png";
export default function PartnerSection() {
  const PartnerContent = [
    {
      thumbnail: Partner1,
      title: "partner",
    },
    {
      thumbnail: Partner2,
      title: "partner",
    },
    {
      thumbnail: Partner3,
      title: "partner",
    },
    {
      thumbnail: Partner4,
      title: "partner",
    },
    {
      thumbnail: Partner5,
      title: "partner",
    },
    {
      thumbnail: Partner6,
      title: "partner",
    },
    {
      thumbnail: Partner7,
      title: "partner",
    },
  ];
  return (
    <section className="partner">
      <div className="container">
        <div className="section-title">
          <h4>
            Our <span>Partners</span>
            <p>Supported by:</p>
          </h4>
        </div>
        <div className="section-content">
          <div className="box-container">
            {PartnerContent.map((item, index) => {
              return (
                <div className="box">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
