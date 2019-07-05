import { Link } from "gatsby";
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
  let githubLink =
    "https://github.com/dtroode/Kistauri/tree/master/src/pages" + props.link;
  githubLink = githubLink.substr(0, githubLink.length - 1) + ".md";

  if (props.className === "post") {
    nav = (
      <nav>
        <ListLink to="/blog" className="nav__a nav__a--back">
          Blog
        </ListLink>
        <ListLink to="/" className="nav__a">
          Portfolio
        </ListLink>
        <a href={githubLink} className="nav__a">
          On Github
        </a>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav>
        <ListLink to="/" className="nav__a">
          Portfolio
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav>
        <ListLink to="/blog" className="nav__a">
          Blog
        </ListLink>
      </nav>
    );
  }
  return nav;
};

const Header = props => (
  <header className={`head--${props.pageClass}`}>
    <Navbar
      className={props.pageClass}
      category={props.category}
      link={props.link}
    />
    <h1>{props.title}</h1>
    <hr />
  </header>
);

export default Header;
