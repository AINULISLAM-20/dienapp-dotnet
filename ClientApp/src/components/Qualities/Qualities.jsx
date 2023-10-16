import React from 'react'
import './Qualities.css'
import Mobile01 from '../../images/app-mob-01.png'
import Mobile02 from '../../images/app-mob-02.png'
import Mobile03 from '../../images/app-mob-03.png'

import HeadPhoneIcon from '../../images/headphones-icon.png'

import btn01 from '../../images/btn-1.webp'
import btn02 from '../../images/btn-2.webp'

import './Qualities.css'

import ScrollAnimation from 'react-animate-on-scroll';



export default function Qualities({ title, text, bulletText }) {
  return (
    <section className="w-100 clean-con">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="app-section position-relative">
              <div className='d-none d-md-flex'>
                <img
                  src={Mobile02}
                  alt="clean-img"
                  width="auto"
                  height={600}
                />
              </div>
              <div className='position-relative position-md-absolute'>
                <img
                  src={Mobile01}
                  alt="clean-img"
                  width="auto"
                  height={700} />
              </div>
              <div className='d-none d-md-flex'>
                <img
                  src={Mobile03}
                  alt="clean-img"
                  width="auto"
                  height={600}
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                <a href="#">
                  <img className='cursor-pointer'
                    src={btn01}
                    alt="App-Store"
                    height={50}
                    width="auto"
                  />
                </a>
              </div>
              <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                <a href="#">
                  <img
                    className="cursor-pointer"
                    src={btn02}
                    alt="Google-Play"
                    height={50}
                    width="auto"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
      </div>
    </section >
  )
}
