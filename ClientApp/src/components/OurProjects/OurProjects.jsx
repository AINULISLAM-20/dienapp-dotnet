import React from 'react'

import project01 from '../../images/project-img1.jpg'
import project02 from '../../images/project-img2.jpg'
import project03 from '../../images/project-img3.jpg'
import project04 from '../../images/project-img4.jpg'
import project05 from '../../images/project-img5.jpg'
import project06 from '../../images/project-img6.jpg'

import location from '../../images/location-icon.png'

export default function OurProjects() {
  return (
    <div>
            {/* PROJECT SECTION */}
            <section className="w-100 float-left project-con position-relative">
        <div className="wrapper">
          <div className="project-title text-center">
            <h2 data-aos="fade-up" data-aos-duration={600}>
              Commercial Projects That{" "}
              <span className="color-01d0cc d-block">
                We Have Successfully Finished
              </span>
            </h2>
          </div>
          <div className="position-relative project-box1">
            <div className="project-box">
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project01} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Window Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>New York</span>
                  </div>
                  <p className="mb-0">
                    Cleaning One World Trade Center's windows is a complex,
                    high-risk task. Experts use specialized equipment and
                    eco-friendly methods regularly
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project02} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Room Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>NYX Hotel Milan </span>
                  </div>
                  <p className="mb-0">
                    NYX Hotel Milan offers meticulous room cleaning, ensuring
                    hygiene and comfort. Professional staff use eco-friendly
                    products for a pristine guest experience.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project03} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Gutter cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>Los angeles</span>
                  </div>
                  <p className="mb-0">
                    In Los Angeles, gutter cleaning services prevent clogs and
                    maintain the integrity of homes. Trained professionals ensure
                    debris-free, efficient drainage.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project04} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Pest control</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>north central Idaho</span>
                  </div>
                  <p className="mb-0">
                    In North Central Idaho, pest control services safeguard homes
                    from local pests. Certified technicians provide effective,
                    environmentally responsible solutions for pest-free living.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project05} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Laundary Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>las Vegas</span>
                  </div>
                  <p className="mb-0">
                    In Los Angeles, gutter cleaning services prevent clogs and
                    maintain the integrity of homes. Trained professionals ensure
                    debris-free, efficient drainage.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project06} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Gutter cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>Los angeles</span>
                  </div>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECT SECTION */}
    </div>
  )
}
