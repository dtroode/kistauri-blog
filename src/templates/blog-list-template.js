import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
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
  const date = new Date();
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
          <article
            id={node.frontmatter.categories}
            key={node.frontmatter.title}
            className="main__sect--arts__art"
          >
            <Link to={node.fields.slug} className="main__sect--arts__art__link">
              <section className="main__sect--arts__art__link__sect">
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.description}</p>
                <p className="date-tags">
                  {/* Date of post written */}
                  <span title={node.frontmatter.date}>
                    {(() => {
                      switch (true) {
                        case node.frontmatter.date.endsWith(date.getFullYear()):
                          return node.frontmatter.date.slice(
                            0,
                            node.frontmatter.date.length - 5
                          );
                        default:
                          return node.frontmatter.date;
                      }
                    })()}
                  </span>
                  <span>·</span>
                  {/* All tags for this post */}
                  {node.frontmatter.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
              </section>
            </Link>
          </article>
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
