import React from 'react'
import Mobile01 from '../../images/app-mob-01.png'
import Mobile02 from '../../images/app-mob-02.png'
import Mobile03 from '../../images/app-mob-03.png'

import HeadPhoneIcon from '../../images/headphones-icon.png'

import btn01 from '../../images/btn-1.webp'
import btn02 from '../../images/btn-2.webp'



export default function Qualities() {
  return (
    <div>
      {/* QUALITIES SECTION */}
      <section className="w-100 float-left clean-con">
        <div className="wrapper2">
          <div className="generic-box">
            <div className="h-100 position-relative" data-aos="fade-up" data-aos-duration={600}>
              <div className="app-section">
                <div>
                  <img
                    src={Mobile02}
                    alt="clean-img"
                    width="auto"
                    height={600}
                  />
                </div>
                <div>
                  <img src={Mobile01} alt="clean-img" />
                </div>
                <div>
                  <img
                    src={Mobile03}
                    alt="clean-img"
                    width="auto"
                    height={600}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  height: "100%",
                  marginTop: 50
                }}
              >
                <img
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  src={btn01}
                  alt=""
                />
                <img
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  src={btn02}
                  alt=""
                />
              </div>
            </div>
            <div className="generic-box-content position-relative">
              <h2 data-aos="fade-up" data-aos-duration={600}>
                We Connect People{" "}
                <span className="color-01d0cc">
                  to Find Best Services Nearest to You{" "}
                </span>
              </h2>
              <p data-aos="fade-up" data-aos-duration={600}>
                Our innovative platform seamlessly connects people, allowing them to
                easily discover and access the highest quality services located
                conveniently in their area
              </p>
              <div className="generic-list">
                <ul className="list-unstyled">
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      Your peace of mind is our priority
                    </span>
                    <p className="mb-0">
                      We are committed to ensuring the security of your essential
                      services. <br />
                      Experience the assurance of a job well done. <br />
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">Real-Time Task Monitoring</span>
                    <p className="mb-0">
                      Confidently monitor your tasks in real-time through live
                      streaming. <br />
                      Upon completion, access recorded videos as irrefutable proof.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      {" "}
                      Manage Your Finances and Track Your History
                    </span>
                    <p className="mb-0">
                      Monitor spending easily within the app to stay on top of your
                      finances.
                      <br />
                      View individual job costs for accurate expense tracking and
                      financial clarity.
                      <br />
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      {" "}
                      Easy Service Scheduling with Our App
                    </span>
                    <p className="mb-0">
                      Easily book services with a few taps for effortless
                      scheduling.
                      <br />
                      Adjust service times as needed with our user-friendly app,
                      ensuring ultimate convenience..
                      <br />
                    </p>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center more-details">
                <div
                  className="call-con position-relative d-inline-block"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <img
                    src={HeadPhoneIcon}
                    alt="headphones-icon"
                  />
                  <div className="call-number">
                    <span className="d-block">Have Any Questions?</span>
                    <a href="#">+1 954-448-3716</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QUALITIES SECTION */}
    </div>
  )
}
