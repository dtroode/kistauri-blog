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
  let githubLink = "https://github.com/dtroode/Kistauri/tree/master/src/pages" + props.link;
  githubLink = githubLinkstr(0, link.length - 1) + ".md";

  if (props.className === "post" || props.className === 'archive') {
    nav = (
      <nav>
        <ListLink to="/blog" className="back">
          Blog
        </ListLink>
        <ListLink to="/" className="non-arrow">
          Portfolio
        </ListLink>
        <a href={githubLink} className="non-arrow">
          On Github
        </a>
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

const Header = props => (
  <header className={props.pageClass}>
    <Navbar className={props.pageClass} category={props.category} link={props.link}/>
    <h1>{props.title}</h1>
    <hr />
  </header>
);
Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
