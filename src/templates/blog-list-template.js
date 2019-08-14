import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/media.scss";
import Layout from "../components/layout";
import Article from "../components/article";
import SEO from "../components/seo";

const BlogList = ({ pageContext, data }) => {
  const PostsList = data.Posts.edges;
  const currentPage = pageContext.currentPage;
  const numPages = pageContext.numPages;
  // Creating link to next page according to current page number
  const nextPageLink =
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
  // Creating link to previous page according to pages count
  const previousPageLink =
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
        <link rel="canonical" href="https://davidkistauri.now.sh/blog" />
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
        </section>
      </section>
    </Layout>
  );
};

export default BlogList;

// Getting limited amount of articles according to blog page number
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
            tags
          }
        }
      }
    }
  }
`;
