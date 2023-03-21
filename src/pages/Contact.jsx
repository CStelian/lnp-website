import React from 'react'
import PageTitleBanner from '../components/PageTitleBanner'
import '../styles/page-styles/contact.scss'

function Contact() {
  return (
    <div className="contact">
      <PageTitleBanner title="Contact" />
      <div className="contact-content">
        <h2>Contact us using the email down below.</h2>
      </div>
      <div className="contact-form">
        <a href="mailto:lnp@lnp-group.com">Email us here.</a>
      </div>
      <div className="social-links">
        <h2>Social media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/LNPYTOficial">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/LNPYTOfficial">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LNPYTOfficial">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@LNPYTOfficial">
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-thank-you">
        <h2>Thank you for wanting to contact us!</h2>
        <p>We're looking forward to hearing from you!</p>
      </div>
    </div>
  )
}

export default Contact