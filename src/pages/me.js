import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/tags.css"
import "../styles/mobile.css"
import "../styles/dark.css"
import Layout from "../components/layout"

const MePage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="tag" title="Me">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Me</title>
        <link rel="canonical" href="http://dtroode.netlify.com/me" />
      </Helmet>
      <section className="articles">
        {postList.edges.map(({ node }) => (
          <article className={node.frontmatter.categories}>
            <Link to={node.fields.slug} className="page-link" >
              <section className="page-content">
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default MePage

export const meQuery = graphql`
  query MeQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { categories: { eq: "me" } } }) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            categories
          }
          timeToRead
        }
      }
    }
  }
`