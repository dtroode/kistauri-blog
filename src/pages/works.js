import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/tags.css"
import "../styles/mobile.css"
import "../styles/dark.css"
import Layout from "../components/layout"

const WorksPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="tag" title="Works">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Works</title>
      <link rel="canonical" href="https://dtroode.netlify.com/works" />
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

export default WorksPage

export const worksQuery = graphql`
  query WorksQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { categories: { eq: "works" } } }) {
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