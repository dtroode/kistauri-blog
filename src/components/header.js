import { Link } from "gatsby";
import React from "react";

const ListLink = props => (
  <Link
    className={props.className}
    to={props.to}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {props.children}
  </Link>
);

const Navbar = props => {
  let nav = "";
  // Creating github link using repository link and page slug. Using only for post pages
  let githubLink =
    "https://github.com/dtroode/Kistauri/tree/master/src/pages" + props.link;
  // Removing latest slash from slug and adding `.md` extension
  githubLink = githubLink.substr(0, githubLink.length - 1) + ".md";

  // Creating different header links for different page types
  if (props.className === "post") {
    nav = (
      <nav>
        <ListLink className="a--primary" to="/">
          @dtroode
        </ListLink>
        <ListLink className="a--primary" to="/blog">
          Блог
        </ListLink>
        <a className="a--primary" href={githubLink} title="На Гитхабе">
          Исправить
        </a>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav>
        <ListLink className="a--primary" to="/">
          @dtroode
        </ListLink>
        <ListLink className="a--primary" to="/blog/tags">
          Теги
        </ListLink>
      </nav>
    );
  } else if (props.className === "portfolio") {
    nav = (
      <nav>
        <ListLink className="a--primary" to="/">
          @dtroode
        </ListLink>
        <ListLink className="a--primary" to="/blog">
          Блог
        </ListLink>
      </nav>
    );
  } else if (props.className === "tag") {
    nav = (
      <nav>
        <ListLink className="a--primary" to="/">
          @dtroode
        </ListLink>
        <ListLink className="a--primary" to="/blog">
          Блог
        </ListLink>
        <ListLink className="a--primary" to="/blog/tags">
          Теги
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav>
        <ListLink className="a--primary" to="/">
          @dtroode
        </ListLink>
        <ListLink className="a--primary" to="/blog">
          Блог
        </ListLink>
      </nav>
    );
  }
  return nav;
};

const Header = props => (
  <header className={`head--${props.pageClass}`}>
    <Navbar className={props.pageClass} link={props.link} />
    <h1>{props.title}</h1>
    <hr />
  </header>
);

export default Header;
