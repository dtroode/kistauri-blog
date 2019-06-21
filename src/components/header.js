import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const ListLink = props => (
  <Link
    to={props.to}
    className={props.className}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {props.children}
  </Link>
);

const Navbar = props => {
  let nav = "";

  if (props.className === "post" || props.className === 'archive') {
    nav = (
      <nav>
        <ListLink to="/blog" className="back">
          Blog
        </ListLink>
        <ListLink to="/" className="non-arrow">
          Portfolio
        </ListLink>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav>
        <ListLink to="/" className="non-arrow">
          Portfolio
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav>
        <ListLink to="/blog" className="non-arrow">
          Blog
        </ListLink>
      </nav>
    );
  }
  return nav;
};

const Header = props => {
  function swicthTheme() {
    if (document.body.getAttribute('data-theme') === null) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('themeSwitch', 'light');
    }
  }

  return (
    <header className={props.pageClass}>
      <Navbar className={props.pageClass} category={props.category} />
      <button className="switch-theme" onClick={() => swicthTheme()}><span className="dark" role="img">🌙</span><span className="light" role="img">🌞</span></button>
      <h1>{props.title}</h1>
      <hr />
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
