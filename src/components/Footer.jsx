import React from 'react'
import '../styles/component-styles/footer.scss'

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <p>© {currentYear} LNP Group - All Rights Reserved</p>
      <div className="links">
        <a href="https://www.lnp-group.com/" target="_blank" rel="noreferrer">LNP Group</a>
        <a className="subscribe" href="https://www.youtube.com/@LNPYTOfficial">Subscribe</a>
      </div>
    </div>
  )
}

export default Footer