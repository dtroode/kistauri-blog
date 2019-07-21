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
        <ListLink to="/" className="a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog" className="a--primary">
          Блог
        </ListLink>
        <a href={githubLink} title="На Гитхабе" className="a--primary">
          Исправить
        </a>
      </nav>
    );
  } else if (props.className === "blog") {
    nav = (
      <nav>
        <ListLink to="/" className="a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog/tags" className="a--primary">
          Теги
        </ListLink>
      </nav>
    );
  } else if (props.className === "portfolio") {
    nav = (
      <nav>
        <ListLink to="/" className="a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog" className="a--primary">
          Блог
        </ListLink>
      </nav>
    );
  } else if (props.className === "tag") {
    nav = (
      <nav>
        <ListLink to="/" className="a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog" className="a--primary">
          Блог
        </ListLink>
        <ListLink to="/blog/tags" className="a--primary">
          Теги
        </ListLink>
      </nav>
    );
  } else {
    nav = (
      <nav>
        <ListLink to="/" className="a--primary">
          {">_<"}
        </ListLink>
        <ListLink to="/blog" className="a--primary">
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
