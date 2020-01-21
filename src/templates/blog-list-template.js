import React, { useEffect } from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"
import control from "../scripts/control"

import "../styles/media.scss"

const BlogList = ({ pageContext, data }) => {
  const PostsList = data.Posts.edges
  const currentPage = pageContext.currentPage
  const numPages = pageContext.numPages

  const next =
    currentPage === 1
      ? ""
      : currentPage === 2
      ? "/blog/"
      : `/blog/page/${currentPage - 1}`
  const prev = currentPage === numPages ? "" : `/blog/page/${currentPage + 1}`

  useEffect(() => {
    control(prev, next)
  }, [prev, next])

  // Creating link to next page according to current page number
  const nextPageLink =
    currentPage === 1 ? (
      ""
    ) : (
      <Link to={next} className="a--secondary">
        ←
      </Link>
    )
  // Creating link to previous page according to pages count
  const previousPageLink =
    currentPage === numPages ? (
      ""
    ) : (
      <Link to={prev} className="a--secondary">
        →
      </Link>
    )
  const allPostsLink =
    numPages > 1 ? (
      <Link to="/blog/all" className="a--secondary">
        Все посты
      </Link>
    ) : (
      ""
    )
  return (
    <Layout pageClass="blog" title="Давид Кистаури. Блог">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/blog" />
      </Helmet>
      <SEO
        title="Блог"
        description="Блог Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__sect--arts">
        {/* Displaying all articles according to limit */}
        {PostsList.map(({ node }) => (
          <Article node={node} key={node.frontmatter.title} />
        ))}
        <section className="main__sect--arts__pages">
          {nextPageLink}
          {previousPageLink}
          {allPostsLink}
        </section>
      </section>
    </Layout>
  )
}

export default BlogList

// Getting limited amount of articles according to blog page number
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    Posts: allMarkdownRemark(
      filter: { frontmatter: { posttype: { ne: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            categories
            tags
          }
        }
      }
    }
  }
`
