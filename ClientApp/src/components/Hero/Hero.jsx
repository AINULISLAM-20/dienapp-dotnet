import React from "react";
import HeroImage from "../../images/home-girls-img.png";

export default function Hero({ title, text, buttonText }) {
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
                  <h1 className="text-white" > {title} </h1>
                  <p data-aos="fade-up" data-aos-duration={600}> {text} </p>
                  <div className="d-flex align-items-center more-details">
                    {buttonText.map((text, index) => {
                      return (
                        <div
                          className="generic-btn d-inline-block green-btn"
                          data-aos="fade-up"
                          data-aos-duration={600}
                          key={index}
                        >
                          <a href="#">{text}</a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-0 order-1 position-relative">
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
