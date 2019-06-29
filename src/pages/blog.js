import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/pages-styles/blog.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";

const IndexPage = props => {
  const firstPostsList = props.data.firstPosts.edges;
  const remainingPostsList = props.data.remainingPosts.edges;
  return (
    <Layout pageClass="blog" title="David Kistauri Blog">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO title="Blog" description="Whoa! Welcome to my, David Kistauri's Blog! Name any word and i'll make an article about it" image="/img/preview.jpg"/>
      <h2>Posts</h2>
      <section className="articles first-articles">
        {firstPostsList.map(({ node }) => (
          <article className={node.frontmatter.categories}>
            <Link to={node.fields.slug} className="page-link">
              <section className="page-content-container">
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
              </section>
            </Link>
          </article>
        ))}
        <hr />
      </section>
      <h2>Older Posts</h2>
      <section className="articles remaining-articles">
        {remainingPostsList.map(({ node }) => (
          <article className={node.frontmatter.categories}>
            <Link to={node.fields.slug} className="page-link">
              <section className="page-content-container">
                <section className="page-content">
                  <h2>{node.frontmatter.title}</h2>
                  <p className="date-mins">
                    {node.frontmatter.date} • {node.timeToRead} min read
                  </p>
                </section>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query {
    firstPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
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
    remainingPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      skip: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            categories
          }
          timeToRead
        }
      }
    }
  }
`;
