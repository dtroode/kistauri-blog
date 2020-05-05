import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const AdditionalLinks = props => {
  let links = ''

  // Creating different header links for different page types
  if (props.className === 'blog') {
    links = (
      <>
        <Link to="/blog/all" className="head__a a--secondary">
          Теги
        </Link>
        <Link
          to="/blog/all/rss-subscribe"
          className="head__a a--secondary"
        >
          Подписаться
        </Link>
      </>
    )
  } else if (props.className === 'tag') {
    links = (
      <Link to="/blog/all" className="head__a a--secondary">
        Теги
      </Link>
    )
  } else if (props.className === 'projects') {
    links = (
      <Link to="/blog/all/rss-subscribe" className="head__a a--secondary">
        Подписаться
      </Link>
    )
  } else if (props.className === 'project') {
    links = (
      <a href={props.linkToProject} className="head__a a--secondary">
        {props.linkToProject.substr(8)} {/* Remove https:// */}
      </a>
    )
  } else {
    links = ''
  }
  return links
}

const Header = props => (
  <header className={`head head--${props.pageClass}`}>
    <nav className="head__nav">
      <Link
        to="/"
        className="head__a a--primary"
        activeClassName="a--active"
      >
        {'>_<'}
      </Link>
      <Link
        to="/projects/"
        className="head__a a--primary"
        activeClassName="a--active"
        partiallyActive={true}
      >
        Проекты
      </Link>
      <Link
        to="/reading/"
        className="head__a a--primary"
        activeClassName="a--active"
        partiallyActive={true}
      >
        Читаю
      </Link>
      <Link
        to="/blog/"
        className="head__a a--primary"
        activeClassName="a--active"
        partiallyActive={true}
      >
        Блог
      </Link>
      <AdditionalLinks
        className={props.pageClass}
        linkToProject={props.linkToProject}
      />
    </nav>
    <h1 className={`head__header head__header--${props.pageClass}`}>
      {props.title}
    </h1>
    <hr />
  </header>
)

Header.propTypes = {
  pageClass: PropTypes.string,
  linkToProject: PropTypes.string,
  title: PropTypes.string
}

export default Header
