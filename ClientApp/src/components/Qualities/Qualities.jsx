import React from 'react'
import './Qualities.css'
import Mobile01 from '../../images/app-mob-01.png'
import Mobile02 from '../../images/app-mob-02.png'
import Mobile03 from '../../images/app-mob-03.png'

import HeadPhoneIcon from '../../images/headphones-icon.png'

import btn01 from '../../images/btn-1.webp'
import btn02 from '../../images/btn-2.webp'



export default function Qualities({ title, text, bulletText }) {
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
                {title}
              </h2>
              <p data-aos="fade-up" data-aos-duration={600}>
                {text}
              </p>
              <div className="generic-list">
                <ul className="list-unstyled">
                  {bulletText.map(({ title, text }, idx) => {
                    return (<li data-aos="fade-up" data-aos-duration={600} key={idx}>
                      <span className="d-block">
                        {title}
                      </span>
                      <p className="mb-0">
                        {text}
                      </p>
                    </li>)
                  })}
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
