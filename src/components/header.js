import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <Link to={props.to} className={props.className} style={{ backgroundColor: props.backgroundColor }}>{props.children}</Link>
)

const Navbar = props => {
  let nav = '';
  let color = '';
  let categoryLink = "/" + props.category;

  if (props.className === 'post') {
    if (props.category === 'me') {
      color = 'var(--accent-red)'
    } else if (props.category === 'works') {
      color = 'var(--accent-yellow)'
    } else if (props.category === 'news') {
      color = 'var(--accent-blue)'
    } else {
      color = 'var(--accent-green)'
    }
    nav = (
      <nav>
        <ListLink to="/" className="long-back">Blog</ListLink>
        <ListLink to={categoryLink} className="back" backgroundColor={color}>{props.category}</ListLink>
      </nav>
    )
  } else if (props.className === 'blog') {
    nav = (
      <nav>
        <ListLink to="/portfolio">Portfolio</ListLink>
        <ListLink to="/tags">Tags</ListLink>
      </nav>
    ) 
  } else {
    nav = (
      <nav>
        <ListLink to="/" className="back">Blog</ListLink>
      </nav>
    )
  }
  return nav;
}


const Header = (props) => (
  <header className={props.pageClass}>
    <Navbar className={props.pageClass} category={props.category}/>
    <h1>{props.title}</h1>
    <hr/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
