import React from 'react'
import arrow from '../../images/top-arrow.png'


export default function CopyRightFooter() {
  return (
    <div>
          {/* COPYRIGHT CON */}
          <div className="w-100 float-left copyright-con position-relative">
        <a href="#back-top">
          <div className="black-btn">
            <img src={arrow} alt="top-arrow" />
          </div>
        </a>
        <div className="wrapper">
          <div className="copyright-inner-con d-flex align-items-center justify-content-between">
            <div className="footer-social">
              <ul className="list-unstyled mb-0 d-flex">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f d-flex align-items-center justify-content-center" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter d-flex align-items-center justify-content-center" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram d-flex align-items-center justify-content-center" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-txt">
              <span>©2023 Dienapp , All Rights Reserved. </span>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT CON */}
    </div>
  )
}
