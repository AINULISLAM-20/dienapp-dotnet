import React, { useState } from 'react'
import './Services.css'
import left from '../../images/left-angle.png'

import ItemsCarousel from 'react-items-carousel';

export default function Services({ title, list }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {list.map(({ imgSrc, title, text }, index) => {
                  return (<div className="item" key={index}>
                    <div className="service-item text-center">
                      <figure>
                        <img src={imgSrc} alt="service-img" />
                      </figure>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <a href="#">
                        <img src={left} alt="left-angle" />
                      </a>
                    </div>
                  </div>)
                })}
              </ItemsCarousel>

              {/* <div className="owl-carousel owl-theme" id="service-slider"></div> */}

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
