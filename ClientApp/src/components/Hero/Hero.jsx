import React from "react";
import HeroImage from "../../images/home-girls-img.png";

export default function Hero() {
  return (
    <div>
      {/* BANNER SECTION */}
      <section
        id="back-top"
        className="w-100 float-left banner-con home-banner position-relative"
      >
        <div className="banner-inner-con position-relative">
          <div className="wrapper2">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-title position-relative">
                  <h1
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    Join DIEN to Boost Your Business
                  </h1>
                  <p data-aos="fade-up" data-aos-duration={600}>
                    Experience the future of convenience by watching live video
                    streaming as skilled professionals take care of your
                    assigned tasks, whether at the office or home.
                  </p>
                  <div className="d-flex align-items-center more-details">
                    <div
                      className="generic-btn d-inline-block green-btn"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <a href="#">register as service provider</a>
                    </div>
                    <div
                      className="generic-btn d-inline-block green-btn"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <a href="#">lets find service provider</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-0 order-1">
                <div className="banner-img">
                  <figure className="mb-0">
                    <img src={HeroImage} alt="home-girls-img" />
                  </figure>
                </div>
              </div>
            </div>
            {/* wrapper */}
          </div>
        </div>
      </section>
      {/* BANNER SECTION */}
    </div>
  );
}
