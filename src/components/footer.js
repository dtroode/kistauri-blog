import { Link } from "gatsby"
import React from "react"

const ListLink = props => (
  <Link to={props.to} className={props.className}>{props.children}</Link>
)

const Footer = (props) => (
  <footer>
    <h2>About contacts</h2>
    <section className="links-container">
      <p>You can find me in social media by username <span className="nickname">@dtroode</span></p>
      <nav>
        <ListLink to="/" className="contacts-text">Portfolio</ListLink>
        <ListLink to="/blog" className="contacts-text">Blog</ListLink>
        <ListLink to="/blog/archive" className="contacts-text">Archive</ListLink>
        <ListLink to="/rss.xml" className="contacts-text">RSS</ListLink>
      </nav>
      <nav>
        <a href="https://github.com/dtroode" className="contacts-text">Github</a>
        <a href="https://twitter.com/dtroode" className="contacts-text">Twitter</a>
        <a href="https://t.me/dtroode" className="contacts-text">Telegram</a>
        <a href="https://t.me/dtroodechannel" className="contacts-text">Telegram channel</a>
      </nav>
    </section>
  </footer>
)

export default Footer
