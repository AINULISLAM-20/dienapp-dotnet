import React from 'react'

import planCheck from '../../images/plan-check.png'


export default function PricingPlan() {
  return (
    <div>
       {/* PRICING SECTION */}
    <section
        className="w-100 float-left user-con position-relative"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="plan-box position-relative">
          <div className="container">
            <div
              className="price-title text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2>
                Service Provider{" "}
                <span className="color-01d0cc d-block">
                  {" "}
                  can choose affordable pricing plan
                </span>
              </h2>
            </div>
            <div className="plan-con">
              <div className="row">
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Basic <br />
                        <h6>individual/Trial</h6>
                      </span>
                      <div className="plan-price">Free</div>
                      <div className="paln-tag">30 Days</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Photos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Maximum 5 Jobs
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Individual
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Service Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Single Service Category
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Silver <br />
                        <h6>individual/Company</h6>
                      </span>
                      <div className="plan-price">$25.00</div>
                      <div className="paln-tag">Per Month</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          4G Body Camera ($600)
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Videos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location/Navigation
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Maximum 15 Jobs Per Month
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Video Services Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Multiple Service Categories
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Gold <br />
                        <h6>individual/Company</h6>
                      </span>
                      <div className="plan-price">$45.00</div>
                      <div className="paln-tag">Per Month</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          4G/5G Body Camera ($600)
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Live Videos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location/Navigation
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Unlimited jobs
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Video Services Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Multiple Service Categories
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      {/* PRICING SECTION */}
    </div>
  )
}
