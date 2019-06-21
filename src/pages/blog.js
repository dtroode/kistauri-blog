import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/pages/blog.scss";
import "../styles/mobile.scss";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="blog" title="David Kistauri Blog">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO title="Blog" description="Whoa! Welcome to my, David Kistauri's Blog! Name any word and i'll make an article about it" image="/img/preview.jpg"/>
      <section className="articles">
        {postList.edges.map(({ node }) => (
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
