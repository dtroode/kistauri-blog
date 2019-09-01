import React from "react";

import { Link } from "gatsby";

const AdditionalLinks = props => {
  let links = "";

  // Creating different header links for different page types
  if (props.className === "blog") {
    links = (
      <>
        <Link to="/blog/tags" className="head__nav__a a--secondary">
          Теги
        </Link>
        <a href="/rss.xml" className="head__nav__a a--secondary">
          Подписаться
        </a>
      </>
    );
  } else if (props.className === "tag") {
    links = (
      <Link to="/blog/tags" className="head__nav__a a--secondary">
        Теги
      </Link>
    );
  } else if (props.className === "projects") {
    links = (
      <a href="/rss.xml" className="head__nav__a a--secondary">
        Подписаться
      </a>
    );
  } else if (props.className === "project") {
    links = (
      <a href={props.linkToProject} className="head__nav__a a--secondary">
        Открыть
      </a>
    );
  } else {
    links = "";
  }
  return links;
};

const Header = props => (
  <header className={`head head--${props.pageClass}`}>
    <nav className="head__nav">
      <Link
        to="/"
        className="head__nav__a a--primary"
        activeClassName="a--active"
      >
        {">_<"}
      </Link>
      <Link
        to="/projects/"
        className="head__nav__a a--primary"
        activeClassName="a--active"
        partiallyActive={true}
      >
        Проекты
      </Link>
      <Link
        to="/blog/"
        className="head__nav__a a--primary"
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
    <h1 className="head__header">{props.title}</h1>
    <hr />
  </header>
);

export default Header;
