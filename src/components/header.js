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
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary" to="/">
          {">_<"}
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog">
          Блог
        </ListLink>
        <ListLink className="head__nav__a a--secondary" to="/blog/rss">
          Подписаться
        </ListLink>
        <a
          className="head__nav__a a--secondary"
          href={githubLink}
          title="На Гитхабе"
        >
          Исправить
        </a>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary" to="/">
          {">_<"}
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog/tags">
          Теги
        </ListLink>
        <ListLink className="head__nav__a a--secondary" to="/blog/rss">
          Подписаться
        </ListLink>
      </nav>
    );
  } else if (props.className === "portfolio") {
    nav = (
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary a--active" to="/">
          {">_<"}
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog">
          Блог
        </ListLink>
      </nav>
    );
  } else if (props.className === "tag") {
    nav = (
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary" to="/">
          {">_<"}
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog">
          Блог
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog/tags">
          Теги
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary" to="/">
          {">_<"}
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog">
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
    <h1 className="head__header">{props.title}</h1>
    <hr />
  </header>
);

export default Header;
