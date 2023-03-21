import React from 'react'
import PageTitleBanner from '../components/PageTitleBanner'
import '../styles/page-styles/contact.scss'

function Contact() {
  return (
    <div className="contact">
      <PageTitleBanner title="Contact" />
      <div className="contact-content">
        <p>Contact us using the form down below.</p>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="social-links">
        <h2>Social media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact