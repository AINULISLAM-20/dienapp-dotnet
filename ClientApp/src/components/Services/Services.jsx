import React from 'react'
import './Services.css'

import service01 from '../../images/service-img1.jpg'
import service02 from '../../images/service-img2.jpg'
import service03 from '../../images/service-img3.jpg'
import service04 from '../../images/service-img4.jpg'

import left from '../../images/left-angle.png'

export default function Services({ title, list, imgSrc }) {
  console.log(imgSrc)
  return (
    <div>
      {/* SERVICE SECTION */}
      <section className="w-100 float-left service-con position-relative">
        <div className="service-inner-box position-relative">
          <div className="wrapper">
            <div className="service-title text-center position-relative">
              <h2 className="text-white" data-aos="fade-up" data-aos-duration={600}>
                {title}
              </h2>
            </div>
            <div
              className="service-inner-con"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="owl-carousel owl-theme" id="service-slider">
                {list.map(({ title, text }, index) => {
                  return (<div className="item" key={index}>
                    <div className="service-item text-center">
                      <figure>
                        <img src={service01} alt="service-img" />
                      </figure>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <a href="#">
                        <img src={left} alt="left-angle" />
                      </a>
                    </div>
                  </div>)
                })}
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
