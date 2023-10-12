import React from 'react'

import contact from '../../images/contact-img.png'


export default function ContactForm() {
  return (
    <div>
           {/* CONTACT-SECTION */}
           <section className="w-100 float-left contact-con position-relative">
        <div className="contact-inner-con position-relative">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-7 col-md-7 order-md-0 order-2">
                <div className="contact-title position-relative">
                  <h2
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    Book Instant Service
                  </h2>
                </div>
                <form
                  className="form-con"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  method="post"
                  id="contactpage"
                >
                  <ul className="list-unstyled">
                    <li>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="fname"
                        id="fname"
                      />
                    </li>
                    <li>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        id="phone"
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        id="location"
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Your Message"
                        name="subject"
                        id="subject"
                        defaultValue={""}
                      />
                    </li>
                  </ul>
                  <button className="submit-btn" id="submit">
                    Send Now
                  </button>
                </form>
              </div>
              <div
                className="col-lg-5 col-md-5 order-md-0 order-1"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={contact} alt="contact-img" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT-SECTION */}
    </div>
  )
}
