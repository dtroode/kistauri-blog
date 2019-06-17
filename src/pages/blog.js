import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../styles/blog.css";
import "../styles/mobile.css";
import "../styles/dark.css";
import Layout from "../components/layout";
import Img from "gatsby-image";

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="blog" title="David Kistauri Blog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://dtroode.netlify.com" />
      </Helmet>
      <section className="articles">
        {postList.edges.map(({ node }) => (
          <article className={node.frontmatter.categories}>
            <Link to={node.fields.slug} className="page-link">
              <Img
                fluid={node.frontmatter.hero.childImageSharp.fluid}
                className="page-background"
                alt={node.frontmatter.title}
              />
              <section className="page-content">
                <h2>{node.frontmatter.title}</h2>
                <p className="date-mins">
                  {node.frontmatter.date} • {node.timeToRead} min read
                </p>
              </section>
            </Link>
          </article>
        ))}
        <Link to="/blog/archive" className="show-more">
          More...
        </Link>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 20
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            categories
            hero {
              childImageSharp {
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;
