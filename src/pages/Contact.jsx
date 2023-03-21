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
          onSubmit={e => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)
            const xhr = new XMLHttpRequest()
            xhr.open(form.method, form.action)
            xhr.setRequestHeader('Accept', 'application/json')
            xhr.onreadystatechange = () => {
              if (xhr.readyState !== XMLHttpRequest.DONE) return
              if (xhr.status === 200) {
                form.reset()
                alert('Thanks for contacting us!')
              } else {
                alert('Oops! There was a problem.')
              }
            }
            xhr.send(data)
          }
        }
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