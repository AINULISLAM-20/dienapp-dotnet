import React from 'react'

import service01 from '../../images/service-img1.jpg'
import service02 from '../../images/service-img2.jpg'
import service03 from '../../images/service-img3.jpg'
import service04 from '../../images/service-img4.jpg'

import left from '../../images/left-angle.png'

export default function Services() {
  return (
    <div>
            {/* SERVICE SECTION */}
            <section className="w-100 float-left service-con position-relative">
        <div className="service-inner-box position-relative">
          <div className="wrapper">
            <div className="service-title text-center position-relative">
              <h2 className="text-white" data-aos="fade-up" data-aos-duration={600}>
                Our Top Rated{" "}
                <span className="d-block">Cleaning Services For You</span>
              </h2>
            </div>
            <div
              className="service-inner-con"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="owl-carousel owl-theme" id="service-slider">
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service01} alt="service-img" />
                    </figure>
                    <h3>Air Duct Cleaning</h3>
                    <p>
                      Breathe Easy with Fresh, Clean Air – Air Duct Cleaning for
                      Healthier Living.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service02} alt="service-img" />
                    </figure>
                    <h3>Lawn Service</h3>
                    <p>
                      Your Dream Lawn, Our Passion – Transforming Yards into Lush
                      Paradise.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service03} alt="service-img" />
                    </figure>
                    <h3>Landscaping Service</h3>
                    <p>
                      Crafting Beauty, Nurturing Serenity – Landscaping Services
                      That Exceed Expectations.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service04} alt="service-img" />
                    </figure>
                    <h3>Pest Control Service</h3>
                    <p>
                      Protecting Your Peace of Mind – Pest Control Services You Can
                      Trust.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service01} alt="service-img" />
                    </figure>
                    <h3>Gutter Cleaning</h3>
                    <p>
                      Clear Skies, Clean Gutters – Keeping Your Home Safe and Water
                      Flowing Smoothly.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="generic-btn d-block text-center"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <a href="#">View All</a>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE SECTION */}
    </div>
  )
}
