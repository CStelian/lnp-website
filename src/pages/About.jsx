import React from 'react'
import PageTitleBanner from '../components/PageTitleBanner'
import { Link } from 'react-router-dom'

import '../styles/page-styles/about.scss'

function About() {
  return (
    <div className="about">
      <PageTitleBanner title="About" />
      <div className="info-box">
        <div className="about-info">
          <h2>About LNP Productions</h2>
          <p>
            LNP Productions is the official LNP Group YouTube channel. It specialises on Ninjago content and subtitles.
          </p>
        </div>
        <div className="faq">
          <h2>FAQ</h2>
          <div className="question">
            <div className="question-header">
              <h3>Q: What is LNP Productions?</h3>
              <button 
                className="question-button"
                onClick={() => {
                  const question = document.querySelector('.question')
                  const questionButton = document.querySelector('.question-button')
                  question.classList.toggle('active')
                  questionButton.innerText = question.classList.contains('active') ? 'Close' : 'Open'
                }}
              >
                Open
              </button>
            </div>
            <p>LNP Productions is the official LNP Group YouTube channel. It specialises on Ninjago content and subtitles.</p>
          </div>
          <div className="question question-one">
            <div className="question-header">
              <h3>Q: What is LNP Group?</h3>
              <button 
                className="question-button question-button-one"
                onClick={() => {
                  const question = document.querySelector('.question-one')
                  const questionButton = document.querySelector('.question-button-one')
                  question.classList.toggle('active')
                  questionButton.innerText = question.classList.contains('active') ? 'Close' : 'Open'
                }}
              >
                Open
              </button>
            </div>
            <p>LNP Group is a group of brands creating content owned by Stelian Cioarec.</p>
          </div>
          <div className="question question-two">
            <div className="question-header">
              <h3>Q: How can I contact LNP Productions?</h3>
              <button 
                className="question-button question-button-two"
                onClick={() => {
                  const question = document.querySelector('.question-two')
                  const questionButton = document.querySelector('.question-button-two')
                  question.classList.toggle('active')
                  questionButton.innerText = question.classList.contains('active') ? 'Close' : 'Open'
                }}
              >
                Open
              </button>
            </div>
            <p>You can contact LNP Productions by sending an email at <Link to="/contact">this page</Link>.</p>
          </div>
          <div className="question question-three">
            <div className="question-header">
              <h3>Q: How can I contact LNP Group?</h3>
              <button 
                className="question-button question-button-three"
                onClick={() => {
                  const question = document.querySelector('.question-three')
                  const questionButton = document.querySelector('.question-button-three')
                  question.classList.toggle('active')
                  questionButton.innerText = question.classList.contains('active') ? 'Close' : 'Open'
                }}
              >
                Open
              </button>
            </div>
            <p>You can contact LNP Group by sending an email at <a href="https://lnp-group.com/contact">this page</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About