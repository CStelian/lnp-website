import React from 'react'
import HomeBanner from '../components/HomeBanner'
import LiveSubCount from '../components/LiveSubCount'

import '../styles/page-styles/home.scss'

function Home() {
  return (
    <div className="main">
      <HomeBanner />

      <LiveSubCount />

    </div>
  )
}

export default Home