import React from "react";
import './ServiceDetail.css'
import cleanImage from "../../images/clean-img2.jpg";

export default function ServiceDetail() {
  return (
    <section className="w-100 float-left clean-con">
      <div className="container">
        <div className="generic-box service-box position-relative">
          <div className="generic-box-img" data-aos="fade-up" data-aos-duration={600}>
            <div className="generic-box-img1 position-relative">
              <figure className="mb-0">
                <img src={cleanImage} alt="clean-img" />
              </figure>
            </div>
          </div>
          <div className="generic-box-content position-relative">
            <h2 data-aos="fade-up" data-aos-duration={600}>
              Air Duct Cleaning
            </h2>
            <p data-aos="fade-up" data-aos-duration={600}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span
              className="job-title"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              Following are the jobs done
            </span>
            <div className="generic-list2">
              <ul className="list-unstyled mb-0">
                <li data-aos="fade-up" data-aos-duration={600}>
                  4 Bedrooms Cleaning
                </li>
                <li data-aos="fade-up" data-aos-duration={600}>
                  Vacuming
                </li>
                <li data-aos="fade-up" data-aos-duration={600}>
                  4 Bathroom Cleaning
                </li>
                <li data-aos="fade-up" data-aos-duration={600}>
                  Window Cleaning
                </li>
                <li data-aos="fade-up" data-aos-duration={600}>
                  4 Livingroom Cleaning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
