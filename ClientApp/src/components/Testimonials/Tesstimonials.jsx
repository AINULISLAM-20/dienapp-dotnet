import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';

import './Testimonials.css'

import starImg from '../../images/star-img.png'
import clientImg1 from '../../images/client-img1.png'
import clientImg2 from '../../images/client-img2.png'
import clientImg3 from '../../images/client-img3.png'


export default function Tesstimonials() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div>
      {/* TESTIMONIALS SECTION */}
      <section
        className="w-100 float-left user-con position-relative"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="plan-box position-relative">
          <div className="container">
            <div>
              <div
                className="client-title text-center position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <h2>
                  We Provide The Best
                  <span className="color-01d0cc d-block">
                    Possible Service To Our Customers.
                  </span>
                </h2>
              </div>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Breathing easier after their thorough clean. Highly
                        recommended air duct cleaning service!
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg1}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>John Brawo</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Our lawn transformed! Impeccable service, lush greenery.
                        They work magic on lawns!
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg2}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>Nelima Frank</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Stunning landscapes created. Expertise shines. Turned our
                        yard into a stunning dream!
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg3}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>little Angel</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur xcepteur sint
                        occaecat cupidatat non proide sunt in culpa qui.
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg2}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>Nelima Frank</h4>
                        <span className="d-block">SEO Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur xcepteur sint
                        occaecat cupidatat non proide sunt in culpa qui.
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg3}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>Nelima Frank</h4>
                        <span className="d-block">SEO Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-review-box">
                    <div className="client-review-content position-relative">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur xcepteur sint
                        occaecat cupidatat non proide sunt in culpa qui.
                      </p>
                      <figure className="mb-0">
                        <img src={starImg} alt="star-img" />
                      </figure>
                    </div>
                    <div className="client-info">
                      <figure className="mb-0">
                        <img
                          src={clientImg1}
                          alt="client-img1"
                        />
                      </figure>
                      <div className="client-name">
                        <h4>Nelima Frank</h4>
                        <span className="d-block">SEO Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION */}
    </div>
  )
}
