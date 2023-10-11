import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "./TopNav.module.css";

export function TopNav() {
    return (
        <div className="top-bar-con">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="social-con justify-content-md-start">
                            <span className="">Follow Us:</span>
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="client-info justify-content-md-end">
                            <ul className='flex-md-row'>
                                <li>
                                    <a href="tel:+1 954-448-3716">
                                        <FaPhoneAlt />
                                        <span>+1 954-448-3716</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:Info@letsclean.com">
                                        <FaEnvelope />
                                        <span>Info@dienapp.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}