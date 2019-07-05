import { Link } from "gatsby";
import React from "react";

const ListLink = props => (
  <Link to={props.to} className={props.className}>
    {props.children}
  </Link>
);

const Footer = props => (
  <footer>
    <h2>About contacts</h2>
    <section className="foot__cont">
      <p>
        You can find me in social media by username{" "}
        <span className="nickname">@dtroode</span>
      </p>
      <nav className="foot__cont__nav foot__cont__nav--page-links">
        <ListLink to="/">Portfolio</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <ListLink to="/rss.xml">RSS</ListLink>
        <ListLink to="/sitemap.xml">Sitemap</ListLink>
      </nav>
      <nav className="foot__cont__nav foot__cont__nav--other-links">
        <a href="https://github.com/dtroode">Github</a>
        <a href="https://twitter.com/dtroode">Twitter</a>
        <a href="https://t.me/dtroode">Telegram</a>
        <a href="https://t.me/dtroodechannel">TG channel</a>
      </nav>
    </section>
  </footer>
);

export default Footer;
