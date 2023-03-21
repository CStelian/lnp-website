import React from 'react'
import '../styles/component-styles/page-title-banner.scss'

function PageTitleBanner(props) {
  return (
    <div class="page-banner">
        <h1>{ props.title }</h1>
    </div>
  )
}

export default PageTitleBanner