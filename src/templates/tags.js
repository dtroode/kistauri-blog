import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import SEO from "../components/seo";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext; // Getting tag from context in graphql
  const { edges, totalCount } = data.allMarkdownRemark;
  // Formatting text according to posts count
  const tagHeader = (
    <>
      <span>
        {totalCount}{" "}
        {totalCount === 1 ? "пост" : 2 || 3 || 4 ? "поста" : "постов"} с тегом
      </span>
      <br />
      {tag}
    </>
  );

  return (
    <Layout pageClass="tag" title={tagHeader}>
      <SEO
        title={tag}
        description={`Блог Давида Кистаури. тег: ${tag}`}
        image="/img/preview.jpg"
      />
      <section className="main__arts">
        {/* Displaying all articles, that match this tag */}
        {edges.map(({ node }) => {
          return (
            <article
              id={node.frontmatter.categories}
              key={node.frontmatter.title}
            >
              <Link to={node.fields.slug}>
                <section className="art__cont">
                  <h2>{node.frontmatter.title}</h2>
                  <p className="time-tags">
                    {/* Date of post written */}
                    <time dateTime="">{node.frontmatter.date}</time> •{" "}
                    {/* Post read time */}
                    <span>{node.timeToRead}</span> мин.
                    <br />
                    {/* All tags for this post */}
                    {node.frontmatter.tags.map(tag => (
                      <>
                        <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
                      </>
                    ))}
                  </p>
                  <p>{node.frontmatter.description}</p>
                </section>
              </Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default Tags;

// Getting all articles, that match this tag
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
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
