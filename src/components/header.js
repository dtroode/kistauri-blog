import React from "react";

import { Link } from "gatsby";

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

  // Creating different header links for different page types
  if (props.className === "post") {
    nav = (
      <nav className="head__nav">
        <ListLink className="head__nav__a a--primary" to="/">
          {">_<"}
        </ListLink>
        <ListLink to="/projects" className="head__nav__a a--primary">
          Проекты
        </ListLink>
        <ListLink className="head__nav__a a--primary" to="/blog">
          Блог
        </ListLink>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav className="head__nav">
        <ListLink to="/" className="head__nav__a a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/projects" className="head__nav__a a--primary">
          Проекты
        </ListLink>
        <ListLink to="/blog/tags" className="head__nav__a a--primary">
          Теги
        </ListLink>
        <a href="/blog/rss.xml" className="head__nav__a a--secondary">
          Подписаться
        </a>
      </nav>
    );
  } else if (props.className === "portfolio" || props.className === "tags") {
    nav = (
      <nav className="head__nav">
        <ListLink to="/" className="head__nav__a a--primary a--active">
          {">_<"}
        </ListLink>
        <ListLink to="/projects" className="head__nav__a a--primary">
          Проекты
        </ListLink>
        <ListLink to="/blog" className="head__nav__a a--primary">
          Блог
        </ListLink>
      </nav>
    );
  } else if (props.className === "tag") {
    nav = (
      <nav className="head__nav">
        <ListLink to="/" className="head__nav__a a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/projects" className="head__nav__a a--primary">
          Проекты
        </ListLink>
        <ListLink to="/blog" className="head__nav__a a--primary">
          Блог
        </ListLink>
        <ListLink to="/blog/tags" className="head__nav__a a--primary">
          Теги
        </ListLink>
      </nav>
    );
  } else if (props.className === "projects") {
    nav = (
      <nav className="head__nav">
        <ListLink to="/" className="head__nav__a a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog" className="head__nav__a a--primary">
          Блог
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav className="head__nav">
        <ListLink to="/" className="head__nav__a a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/projects" className="head__nav__a a--primary">
          Проекты
        </ListLink>
        <ListLink to="/blog" className="head__nav__a a--primary">
          Блог
        </ListLink>
        <a href={props.linkToProject} className="head__nav__a a--secondary">
          Открыть
        </a>
      </nav>
    );
  }
  return nav;
};

const Header = props => (
  <header className={`head head--${props.pageClass}`}>
    <Navbar className={props.pageClass} linkToProject={props.linkToProject} />
    <h1 className="head__header">{props.title}</h1>
    <hr />
  </header>
);

export default Header;
