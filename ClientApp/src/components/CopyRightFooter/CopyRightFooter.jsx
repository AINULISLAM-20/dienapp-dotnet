import React from 'react'
import Arrow from '../../images/top-arrow.png'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import './CopyRightFooter.css'


export default function CopyRightFooter() {
  return (
    <div className="w-100 copyright-con position-relative">
      <div className="container">
        <div className="py-2 d-flex align-items-center justify-content-between">
          <div className="footer-social">
            <ul className="list-unstyled mb-0 d-flex">
              <li>
                <a href="#">
                  <i className="d-flex align-items-center justify-content-center"><FaFacebookF /></i>

                </a>
              </li>
              <li>
                <a href="#">
                  <i className="d-flex align-items-center justify-content-center"><FaTwitter /></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="d-flex align-items-center justify-content-center"><FaLinkedinIn /></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="d-flex align-items-center justify-content-center"><FaInstagram /></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-txt">
            <span>©2023 Dienapp , All Rights Reserved. </span>
          </div>
        </div>
      </div>
      <a href="#back-top">
        <div className="black-btn">
          <img src={Arrow} alt="top-arrow" />
        </div>
      </a>
    </div>
  )
}
