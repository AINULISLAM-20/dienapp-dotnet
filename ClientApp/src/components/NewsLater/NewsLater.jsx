import React from 'react'
import './Newslater.css'

import paperPlane from '../../images/paper-plane-icon.png'


export default function NewsLater() {
  return (
    <section className="container">
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
    </section>
  )
}
