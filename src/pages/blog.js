import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
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
      <SEO
        title="Blog"
        description="Whoa! Welcome to my, David Kistauri's Blog! Name any word and i'll make an article about it"
        image="/img/preview.jpg"
      />
      <h2>Latest Posts</h2>
      <section className="main__arts main__arts--first">
        {firstPostsList.map(({ node }) => (
          <article id={node.frontmatter.categories}>
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <Img
                  fluid={node.frontmatter.hero.childImageSharp.fluid}
                  className="art__cont__bg"
                  alt={node.frontmatter.title}
                />
                <section className="art__cont__txt">
                  <span>{node.frontmatter.title}</span>
                  <p>
                    {node.frontmatter.date} • {node.timeToRead} min read
                  </p>
                  <p>{node.frontmatter.description}</p>
                </section>
              </section>
            </Link>
          </article>
        ))}
        <hr />
      </section>
      <h2>Older Posts</h2>
      <section className="main__arts main__arts--remaining">
        {remainingPostsList.map(({ node }) => (
          <article id={node.frontmatter.categories}>
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <section className="art__cont__txt">
                  <span>{node.frontmatter.title}</span>
                  <p>
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
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            description
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
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 5
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
