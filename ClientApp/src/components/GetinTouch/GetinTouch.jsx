import React from 'react'
import './GetinTouch.css'


import emailImage from '../../images/form-email-icon.png'
import userImage from '../../images/form-user-icon.png'
import telphoneImage from '../../images/form-tel-icon.png'
import PlaneImage from '../../images/form-plane-icon.png'
import locationImage from '../../images/contact-location-icon.png'

export default function GetinTouch() {
  return (
  <section className="w-100 float-left contact-form-con">
    <div className="wrapper">
      <div className="contact-box2 w-100 float-left">
        <div className="contact-form">
          <h2 data-aos="fade-up" data-aos-duration={600}>
            Get in Touch
          </h2>
          <form
            data-aos="fade-up"
            data-aos-duration={600}
            method="post"
            id="contactpage"
          >
            <ul className="list-unstyled">
              <li>
                <div className="input-field">
                  <div className="input-field-icon position-relative d-inline-block">
                    <img
                      src={userImage}
                      alt="form-user-icon"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="fname"
                    id="fname"
                  />
                </div>
              </li>
              <li>
                <div className="input-field">
                  <div className="input-field-icon position-relative d-inline-block">
                    <img
                      src={emailImage}
                      alt="form-email"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    id="email"
                  />
                </div>
              </li>
              <li>
                <div className="input-field">
                  <div className="input-field-icon position-relative d-inline-block">
                    <img
                      src={telphoneImage}
                      alt="form-tel-icon"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    name="phone"
                    id="phone"
                  />
                </div>
              </li>
              <li>
                <div className="input-field">
                  <div className="input-field-icon position-relative d-inline-block">
                    <img
                      src={PlaneImage}
                      alt="form-plane-icon"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    name="subject"
                    id="subject"
                    defaultValue={""}
                  />
                </div>
              </li>
            </ul>
            <button className="contact-submit-btn" id="submit">
              Send
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2 data-aos="fade-up" data-aos-duration={600}>
            INFORMATION
          </h2>
          <ul className="list-unstyled mb-0">
            <li data-aos="fade-up" data-aos-duration={600}>
              <div className="contact-info-item">
                <figure className="mb-0">
                  <img
                    src={locationImage}
                    alt="contact-location-icon"
                  />
                </figure>
                <div className="contact-info-content">
                  <h5>Address</h5>
                  <span>21 King Street Melbourne, 3000, Australia</span>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration={600}>
              <div className="contact-info-item">
                <figure className="mb-0">
                  <img
                    src={telphoneImage}
                    alt="contact-phone-icon"
                  />
                </figure>
                <div className="contact-info-content">
                  <h5>Phone</h5>
                  <a href="tel:+61383766284">+61 3 8376 6284</a>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-duration={600}>
              <div className="contact-info-item">
                <figure className="mb-0">
                  <img
                    src={emailImage}
                    alt="contact-email-icon"
                  />
                </figure>
                <div className="contact-info-content">
                  <h5>Email</h5>
                  <a href="mailto:Info@letsclean.com">Info@letsclean.com</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
