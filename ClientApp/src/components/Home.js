import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import PhoneIcon from '../images/phone-icon.png';
import EmailIcon from '../images/email-icon.png'
import BrandLogo from '../images/logo-img.png'
import HeroImage from '../images/home-girls-img.png'

import Mobile01 from '../images/app-mob-01.png'
import Mobile02 from '../images/app-mob-02.png'
import Mobile03 from '../images/app-mob-03.png'

import HeadPhoneIcon from '../images/headphones-icon.png'

import btn01 from '../images/btn-1.webp'
import btn02 from '../images/btn-2.webp'

import service01 from '../images/service-img1.jpg'
import service02 from '../images/service-img2.jpg'
import service03 from '../images/service-img3.jpg'
import service04 from '../images/service-img4.jpg'

import left from '../images/left-angle.png'

import team01 from '../images/team-image1.png'
import team02 from '../images/team-image2.png'
import team03 from '../images/team-image3.png'
import team04 from '../images/team-image4.png'

import project01 from '../images/project-img1.jpg'
import project02 from '../images/project-img2.jpg'
import project03 from '../images/project-img3.jpg'
import project04 from '../images/project-img4.jpg'
import project05 from '../images/project-img5.jpg'
import project06 from '../images/project-img6.jpg'

import location from '../images/location-icon.png'
import contact from '../images/contact-img.png'

import planCheck from '../images/plan-check.png'

import starImg from '../images/star-img.png'
import clientImg1 from '../images/client-img1.png'
import clientImg2 from '../images/client-img2.png'
import clientImg3 from '../images/client-img3.png'

import paperPlane from '../images/paper-plane-icon.png'
import arrow from '../images/top-arrow.png'

import mobileLogo from '../images/mobile-logo.png'



export function Home() {
  return (
    <>
      <div className="loader-mask d-none">
        <div className="loader">
          <div />
          <div />
        </div>
      </div>
      {/* TOP BAR CON */}
      <div className="w-100 float-left top-bar-con">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="socisl-con d-flex align-items-center justify-content-md-start justify-content-center">
                <span className="text-white d-inline-block text-uppercase">
                  Follow Us:
                </span>
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
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
              <div className="client-info">
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <a href="tel:+1 954-448-3716">
                      <img src={PhoneIcon} alt="phone-icon" />
                      +1 954-448-3716
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Info@letsclean.com">
                      <img src={EmailIcon} alt="email-icon" />
                      Info@dienapp.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* container */}
        </div>
      </div>
      {/* TOP BAR CON */}
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
      {/* HEADER */}
      {/* BANNER SECTION */}
      <section
        id="back-top"
        className="w-100 float-left banner-con home-banner position-relative"
      >
        <div className="banner-inner-con position-relative">
          <div className="wrapper2">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner-title position-relative">
                  <h1
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    Join DIEN to Boost Your Business
                  </h1>
                  <p data-aos="fade-up" data-aos-duration={600}>
                    Experience the future of convenience by watching live video
                    streaming as skilled professionals take care of your assigned
                    tasks, whether at the office or home.
                  </p>
                  <div className="d-flex align-items-center more-details">
                    <div
                      className="generic-btn d-inline-block green-btn"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <a href="#">register as service provider</a>
                    </div>
                    <div
                      className="generic-btn d-inline-block green-btn"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <a href="#">lets find service provider</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-lg-0 order-1 position-relative">
                <div className="banner-img">
                  <figure className="mb-0">
                    <img
                      src={HeroImage}
                      alt="home-girls-img"
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/* wrapper */}
          </div>
        </div>
      </section>
      {/* BANNER SECTION */}
      {/* CLEAN SECTION */}
      <section className="w-100 float-left clean-con">
        <div className="wrapper2">
          <div className="generic-box">
            <div className="h-100 position-relative" data-aos="fade-up" data-aos-duration={600}>
              <div className="app-section">
                <div>
                  <img
                    src={Mobile02}
                    alt="clean-img"
                    width="auto"
                    height={600}
                  />
                </div>
                <div>
                  <img src={Mobile01} alt="clean-img" />
                </div>
                <div>
                  <img
                    src={Mobile03}
                    alt="clean-img"
                    width="auto"
                    height={600}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  height: "100%",
                  marginTop: 50
                }}
              >
                <img
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  src={btn01}
                  alt=""
                />
                <img
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  src={btn02}
                  alt=""
                />
              </div>
            </div>
            <div className="generic-box-content position-relative">
              <h2 data-aos="fade-up" data-aos-duration={600}>
                We Connect People{" "}
                <span className="color-01d0cc">
                  to Find Best Services Nearest to You{" "}
                </span>
              </h2>
              <p data-aos="fade-up" data-aos-duration={600}>
                Our innovative platform seamlessly connects people, allowing them to
                easily discover and access the highest quality services located
                conveniently in their area
              </p>
              <div className="generic-list">
                <ul className="list-unstyled">
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      Your peace of mind is our priority
                    </span>
                    <p className="mb-0">
                      We are committed to ensuring the security of your essential
                      services. <br />
                      Experience the assurance of a job well done. <br />
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">Real-Time Task Monitoring</span>
                    <p className="mb-0">
                      Confidently monitor your tasks in real-time through live
                      streaming. <br />
                      Upon completion, access recorded videos as irrefutable proof.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      {" "}
                      Manage Your Finances and Track Your History
                    </span>
                    <p className="mb-0">
                      Monitor spending easily within the app to stay on top of your
                      finances.
                      <br />
                      View individual job costs for accurate expense tracking and
                      financial clarity.
                      <br />
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={600}>
                    <span className="d-block">
                      {" "}
                      Easy Service Scheduling with Our App
                    </span>
                    <p className="mb-0">
                      Easily book services with a few taps for effortless
                      scheduling.
                      <br />
                      Adjust service times as needed with our user-friendly app,
                      ensuring ultimate convenience..
                      <br />
                    </p>
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center more-details">
                <div
                  className="call-con position-relative d-inline-block"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <img
                    src={HeadPhoneIcon}
                    alt="headphones-icon"
                  />
                  <div className="call-number">
                    <span className="d-block">Have Any Questions?</span>
                    <a href="#">+1 954-448-3716</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CLEAN SECTION */}
      {/* SERVICE SECTION */}
      <section className="w-100 float-left service-con position-relative">
        <div className="service-inner-box position-relative">
          <div className="wrapper">
            <div className="service-title text-center position-relative">
              <h2 className="text-white" data-aos="fade-up" data-aos-duration={600}>
                Our Top Rated{" "}
                <span className="d-block">Cleaning Services For You</span>
              </h2>
            </div>
            <div
              className="service-inner-con"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="owl-carousel owl-theme" id="service-slider">
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service01} alt="service-img" />
                    </figure>
                    <h3>Air Duct Cleaning</h3>
                    <p>
                      Breathe Easy with Fresh, Clean Air – Air Duct Cleaning for
                      Healthier Living.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service02} alt="service-img" />
                    </figure>
                    <h3>Lawn Service</h3>
                    <p>
                      Your Dream Lawn, Our Passion – Transforming Yards into Lush
                      Paradise.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service03} alt="service-img" />
                    </figure>
                    <h3>Landscaping Service</h3>
                    <p>
                      Crafting Beauty, Nurturing Serenity – Landscaping Services
                      That Exceed Expectations.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service04} alt="service-img" />
                    </figure>
                    <h3>Pest Control Service</h3>
                    <p>
                      Protecting Your Peace of Mind – Pest Control Services You Can
                      Trust.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item text-center">
                    <figure>
                      <img src={service01} alt="service-img" />
                    </figure>
                    <h3>Gutter Cleaning</h3>
                    <p>
                      Clear Skies, Clean Gutters – Keeping Your Home Safe and Water
                      Flowing Smoothly.
                    </p>
                    <a href="#">
                      <img src={left} alt="left-angle" />
                    </a>
                  </div>
                </div>
              </div>
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
      {/* TEAM SECTION */}
      <section className="w-100 float-left team-con position-relative">
        <div className="wrapper">
          <div
            className="team-title text-center"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <h2>
              Monthly Top-Rated{" "}
              <span className="color-01d0cc d-block">Service Providers</span>
            </h2>
          </div>
          <div className="team-box">
            <div
              className="team-box-item text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <figure>
                <img src={team01} alt="team-img" />
              </figure>
              <div className="team-social-icon d-flex flex-column align-items-end">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Steve Smith</h3>
              <span className="d-block">Landscaping Expert</span>
            </div>
            <div
              className="team-box-item text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <figure>
                <img src={team02} alt="team-img" />
              </figure>
              <div className="team-social-icon d-flex flex-column align-items-end">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Abelina Smith</h3>
              <span className="d-block">Gutter Cleaner Expert</span>
            </div>
            <div
              className="team-box-item text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <figure>
                <img src={team03} alt="team-img" />
              </figure>
              <div className="team-social-icon d-flex flex-column align-items-end">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Olivia Dee</h3>
              <span className="d-block">Pest Control Expert</span>
            </div>
            <div
              className="team-box-item text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <figure>
                <img src={team04} alt="team-img" />
              </figure>
              <div className="team-social-icon d-flex flex-column align-items-end">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#FFC107", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i
                        className="fa fa-star"
                        style={{ color: "#adadad", fontSize: "1rem" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Adam Smith</h3>
              <span className="d-block">Air Duct Cleaner Expert</span>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM SECTION */}
      {/* PROJECT SECTION */}
      <section className="w-100 float-left project-con position-relative">
        <div className="wrapper">
          <div className="project-title text-center">
            <h2 data-aos="fade-up" data-aos-duration={600}>
              Commercial Projects That{" "}
              <span className="color-01d0cc d-block">
                We Have Successfully Finished
              </span>
            </h2>
          </div>
          <div className="position-relative project-box1">
            <div className="project-box">
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project01} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Window Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>New York</span>
                  </div>
                  <p className="mb-0">
                    Cleaning One World Trade Center's windows is a complex,
                    high-risk task. Experts use specialized equipment and
                    eco-friendly methods regularly
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project02} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Room Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>NYX Hotel Milan </span>
                  </div>
                  <p className="mb-0">
                    NYX Hotel Milan offers meticulous room cleaning, ensuring
                    hygiene and comfort. Professional staff use eco-friendly
                    products for a pristine guest experience.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project03} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Gutter cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>Los angeles</span>
                  </div>
                  <p className="mb-0">
                    In Los Angeles, gutter cleaning services prevent clogs and
                    maintain the integrity of homes. Trained professionals ensure
                    debris-free, efficient drainage.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project04} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Pest control</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>north central Idaho</span>
                  </div>
                  <p className="mb-0">
                    In North Central Idaho, pest control services safeguard homes
                    from local pests. Certified technicians provide effective,
                    environmentally responsible solutions for pest-free living.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project05} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Laundary Cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>las Vegas</span>
                  </div>
                  <p className="mb-0">
                    In Los Angeles, gutter cleaning services prevent clogs and
                    maintain the integrity of homes. Trained professionals ensure
                    debris-free, efficient drainage.
                  </p>
                </div>
              </div>
              <div
                className="project-item position-relative"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <figure className="mb-0">
                  <img src={project06} alt="project-img" />
                </figure>
                <div className="project-item-content text-white">
                  <h3>Gutter cleaning</h3>
                  <div className="location-tag position-relative">
                    <img
                      src={location}
                      alt="location-icon"
                    />
                    <span>Los angeles</span>
                  </div>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECT SECTION */}
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
      {/* USER SECTION */}
      <section
        className="w-100 float-left user-con position-relative"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="plan-box position-relative">
          <div className="container">
            <div
              className="price-title text-center position-relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2>
                Service Provider{" "}
                <span className="color-01d0cc d-block">
                  {" "}
                  can choose affordable pricing plan
                </span>
              </h2>
            </div>
            <div className="plan-con">
              <div className="row">
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Basic <br />
                        <h6>individual/Trial</h6>
                      </span>
                      <div className="plan-price">Free</div>
                      <div className="paln-tag">30 Days</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Photos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Maximum 5 Jobs
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Individual
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Service Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Single Service Category
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Silver <br />
                        <h6>individual/Company</h6>
                      </span>
                      <div className="plan-price">$25.00</div>
                      <div className="paln-tag">Per Month</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          4G Body Camera ($600)
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Videos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location/Navigation
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Maximum 15 Jobs Per Month
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Video Services Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Multiple Service Categories
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="plan-item text-center">
                    <div className="plan-header">
                      <span className="d-block">
                        Gold <br />
                        <h6>individual/Company</h6>
                      </span>
                      <div className="plan-price">$45.00</div>
                      <div className="paln-tag">Per Month</div>
                    </div>
                    <div className="plan-body">
                      <span className="d-block">
                        We are committed to give our best services
                      </span>
                      <ul className="list-unstyled">
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          4G/5G Body Camera ($600)
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Proof of Performance Live Videos
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Share Location/Navigation
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />{" "}
                          Unlimited jobs
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Video Services Profile
                        </li>
                        <li className="position-relative">
                          <img
                            src={planCheck}
                            alt="plan-check"
                          />
                          Multiple Service Categories
                        </li>
                      </ul>
                      <div className="plan-btn">
                        <a href="#">Select A Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div
                className="owl-carousel owl-theme"
                id="client-slider"
                data-aos="fade-up"
                data-aos-duration={600}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* USER SECTION */}
      {/* SUBCRIBE SECTION */}
      <section
        className="w-100 float-left newsletter-con"
        data-aos="fade-up"
        data-aos-duration={600}
      >
        <div className="container">
          <div className="newsletter-box">
            <div className="position-relative newsletter-content">
              <figure className="mb-0">
                <img
                  src={paperPlane}
                  alt="paper-plane-icon"
                />
              </figure>
              <div className="newsletter-text">
                <h3>Subscribe To Our Newsletter</h3>
                <span className="d-block">
                  Stay informed and get exclusive offers! Subscribe to our
                  newsletter for the latest updates and cleaning service promotions
                </span>
              </div>
            </div>
            <div className="news-letter-input">
              <input type="email" placeholder="Email Address...." />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      {/* SUBCRIBE SECTION */}
      {/* FOOTER SECTION */}
      <footer className="w-100 float-left footer-con position-relative">
        <div className="wrapper">
          <div className="footer-box position-relative">
            <div className="site-map">
              <h4>About Us</h4>
              <p className="mb-0">
                Experience the ultimate convenience with our cleaning app! Easily
                schedule and manage top-quality cleaning services at your
                fingertips.
              </p>
            </div>
            <div className="site-map">
              <h4>Quick Links</h4>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className="site-map">
              <h4>Get Free Estimate</h4>
              <div className="footer-phone">
                <a href="tel:+61383766284">+1 954-448-3716</a>
              </div>
              <span className="d-block">
                Our online scheduling and payment system is safe.
              </span>
              <div className="online-btn">
                <a href="#">Request a Instant Service</a>
              </div>
            </div>
            <div className="site-map">
              <h4>Work Days</h4>
              <ul className="list-unstyled schedule">
                <li>Monday - Saturday</li>
                <li>09am - 05pm</li>
              </ul>
              <ul className="list-unstyled mb-0 schedule">
                <li>Sunday</li>
                <li>Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION */}
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
    </>

  )
}
