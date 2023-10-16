import React, { useState } from "react";
import './SecondaryNav.css'

import BrandLogo from "../../images/logo-img.png";
import mobileLogo from "../../images/mobile-logo.png";


import { Link } from "react-router-dom";


export default function SecondaryNav() {
  const [menuClick, setMenuClick] = useState({ isCheck: true });

  return (
    <header className="w-100 header-con">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark px-0">
          <Link to={'/'} className="navbar-brand d-lg-none">
            <img src={mobileLogo} alt="mobile-logo" />
          </Link>
          <button
            className={`navbar-toggler ${menuClick.isCheck === true ? "collapsed" : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuClick(prevState => { return { ...prevState, isCheck: prevState.isCheck === false ? true : false } })}
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          {/*  Use flexbox utility classes to change how the child elements are justified  */}
          <div
            className={`collapse navbar-collapse justify-content-between ${menuClick.isCheck === true ? "" : "show"}`}
            id="navbarToggle"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active p-0">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link p-0">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to={'/services'} className="nav-link p-0">Services</Link>
              </li>
            </ul>
            {/*   Show this only lg screens and up   */}
            <Link to={'/'} className="navbar-brand d-none d-lg-block">
              <figure className="mb-0">
                <img src={BrandLogo} alt="logo-img" />
              </figure>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link p-0">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to={'/register'} className="nav-link p-0">Register</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link p-0">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
