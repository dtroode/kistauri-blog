import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/tags.css"
import "../styles/mobile.css"
import "../styles/dark.css"
import Layout from "../components/layout"

const TagsPage = () => {
  return (
    <Layout pageClass="tag" title="Article Tags">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Article Tags</title>
        <link rel="canonical" href="https://dtroode.netlify.com/tags" />
      </Helmet>
      <section className="articles">
        <article className="page tag-list-page tag-list-page-me">
          <Link to="/me" className="page-link">
            <section className="page-content">
              <h2>Me</h2>
              <p>Articles about me, how I work and my setup</p>
            </section>
          </Link>
        </article>
        <article className="page tag-list-page tag-list-page-works">
          <Link to="/works" className="page-link">
            <section className="page-content">
              <h2>Works</h2>
              <p>News about my works like redesign of project</p>
            </section>
          </Link>
        </article>
        <article className="page tag-list-page tag-list-page-news">
          <Link to="/news" className="page-link">
            <section className="page-content">
              <h2>News</h2>
              <p>My reaction on events what happening around me</p>
            </section>
          </Link>
        </article>
        <article className="page tag-list-page tag-list-page-thoughts">
          <Link to="/thoughts" className="page-link">
            <section className="page-content">
              <h2>Thoughts</h2>
              <p>Thoughts about things in world and about world</p>
            </section>
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export default TagsPage