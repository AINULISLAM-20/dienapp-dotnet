import React from 'react'

export default function Footer() {
  return (
    <div>
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
    </div>
  )
}
