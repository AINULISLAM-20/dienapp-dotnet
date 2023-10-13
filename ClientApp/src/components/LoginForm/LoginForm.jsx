import React from 'react'
import './LoginForm.css'

import facebook from '../../images/facebook-login.png'
import apple from '../../images/apple-login.png'
import google from '../../images/google-login.png'
import EmailImage from '../../images/form-email-icon.png'
import LockImage from '../../images/lock-icon.png'


export default function LoginForm() {
  return (
     <>
      {/* FORM SECTION */}
      <section className="w-100 float-left position-relative login-form-con">
        <div className="wrapper">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="login-form">
                <h2
                  data-aos="fade-up"
                  data-aos-duration={600}
                  className="text-center"
                >
                  log in
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
                            src={EmailImage}
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
                            src={LockImage}
                            alt="form-user-icon"
                          />
                        </div>
                        <input
                          type="password"
                          placeholder="Your Pasword"
                          name="fname"
                          id="fname"
                        />
                      </div>
                    </li>
                  </ul>
                  <p className="text-center">Login With</p>
                  <div className="login-with d-flex justify-content-around mx-auto mb-3">
                    <a href="http://">
                      <img
                        src={facebook}
                        alt=""
                        srcSet=""
                      />
                    </a>
                    <a href="http://">
                      <img
                        src={google}
                        alt=""
                        srcSet=""
                      />
                    </a>
                    <a href="http://">
                      <img
                        src={apple}
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <button className="contact-submit-btn w-100" id="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FORM SECTION */}
</>
  )
}
