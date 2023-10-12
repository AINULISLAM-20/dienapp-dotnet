import React from "react";
import PhoneIcon from "../../images/phone-icon.png";
import EmailIcon from "../../images/email-icon.png";

export default function PrimaryNav() {
  return (
    <div>
      {/* TOP BAR CON */}
      <div className="w-100 float-left top-bar-con">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="socisl-con d-flex align-items-center justify-content-md-start justify-content-center">
                <span className="text-white d-inline-block text-uppercase">
                  Follow Us:
                </span>
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f d-flex align-items-center justify-content-center" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter d-flex align-items-center justify-content-center" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram d-flex align-items-center justify-content-center" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
              <div className="client-info">
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <a href="tel:+1 954-448-3716">
                      <img src={PhoneIcon} alt="phone-icon" />
                      +1 954-448-3716
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Info@letsclean.com">
                      <img src={EmailIcon} alt="email-icon" />
                      Info@dienapp.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* container */}
        </div>
      </div>
      {/* TOP BAR CON */}
    </div>
  );
}
