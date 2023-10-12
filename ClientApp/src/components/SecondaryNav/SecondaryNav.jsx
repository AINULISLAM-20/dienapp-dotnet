import React from "react";
import BrandLogo from "../../images/logo-img.png";
import mobileLogo from "../../images/mobile-logo.png";

export default function SecondaryNav() {
  return (
    <div>
      {/* HEADER */}
      <header className="w-100 float-left header-con">
        <div className="wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark px-0">
            <a className="navbar-brand d-lg-none" href="index.html">
              <img src={mobileLogo} alt="mobile-logo" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            {/*  Use flexbox utility classes to change how the child elements are justified  */}
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarToggle"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active p-0" href="index.html">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    ABOUT US{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Services
                  </a>
                </li>
              </ul>
              {/*   Show this only lg screens and up   */}
              <a className="navbar-brand d-none d-lg-block" href="index.html">
                <figure className="mb-0">
                  <img src={BrandLogo} alt="logo-img" />
                </figure>
              </a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* HEADER */}
    </div>
  );
}
