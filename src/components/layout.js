import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = props => {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const themeMeta = document.querySelector('meta[name=theme-color]')
    const darkModeOn = darkModeMediaQuery.matches

    themeMeta.setAttribute('content', darkModeOn ? '#121212' : '#fafafa')
    darkModeMediaQuery.addListener(e => {
      const darkModeOn = e.matches
      themeMeta.setAttribute('content', darkModeOn ? '#121212' : '#fafafa')
    })
  })

  return (
    <>
      {/* Using header component and passing link of page into it */}
      <Header
        pageClass={props.pageClass}
        title={props.title}
        linkToProject={props.linkToProject}
      />
      {/* Passing childs into main component */}
      <main className={`main main--${props.pageClass}`}>{props.children}</main>
      {/* Using footer component and passing link of page into it */}
      <Footer
        pageClass={props.pageClass}
        title={props.title}
        link={props.link}
      />
    </>
  )
}

Layout.propTypes = {
  pageClass: PropTypes.string,
  linkToProject: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node
}

export default Layout
