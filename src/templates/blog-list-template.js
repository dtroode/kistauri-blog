import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogList = props => {
  const PostsList = props.data.Posts.edges;
  const currentPage = props.pageContext.currentPage;
  const numPages = props.pageContext.numPages;
  const previousPageLink =
    currentPage === 1 ? (
      ""
    ) : currentPage === 2 ? (
      <Link className="a--secondary" to="/blog/">
        ←
      </Link>
    ) : (
      <Link className="a--secondary" to={`/blog/${currentPage - 1}`}>
        ←
      </Link>
    );
  const nextPageLink =
    currentPage === numPages ? (
      ""
    ) : (
      <Link className="a--secondary" to={`/blog/${currentPage + 1}`}>
        →
      </Link>
    );
  return (
    <Layout pageClass="blog" title="Давид Кистаури. Блог">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO
        title="Блог"
        description="Блог Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__arts">
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
                  <span>{node.timeToRead}</span> мин.
                </p>
                <p>{node.frontmatter.description}</p>
              </section>
            </Link>
          </article>
        ))}
        <section className="main__arts__pages">
          {previousPageLink}
          {nextPageLink}
        </section>
      </section>
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    Posts: allMarkdownRemark(
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
            date(formatString: "D MMMM YYYY", locale: "ru")
            description
            categories
          }
          timeToRead
        }
      }
    }
  }
`;
