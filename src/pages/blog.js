import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const PostsList = props.data.Posts.edges;
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
      <section className="main__arts main__arts--first">
        {PostsList.map(({ node }) => (
          <article
            id={node.frontmatter.categories}
            key={node.frontmatter.title}
          >
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <h2>{node.frontmatter.title}</h2>
                <p>
                  <span>{node.frontmatter.date}</span> •{" "}
                  <span>{node.timeToRead}</span> min read
                </p>
                <p>{node.frontmatter.description}</p>
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
    Posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
          }
          timeToRead
        }
      }
    }
  }
`;
