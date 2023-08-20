import React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-content footer-about section-title">
              <h4>
                <span>Cryptoland</span>
              </h4>
              <p>
                When it comes to demolition, it’s all about tearing down to
                either rebuild or to tear down for safety reasons. Our team of
                experienced experts will come in and tear down your structure
                with care and efficiency – leaving the spot where the structure
                was prepared for whatever your next plan is for that area.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-content footer-business-hour">
              <h4>
                <span>Hours Of Operation</span>
              </h4>
              <ul>
                <li>Monday - Saturday : 8 am - 8 pm</li>
                <li>Sunday - By appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
