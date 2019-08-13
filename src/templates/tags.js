import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import SEO from "../components/seo";

function postsOnNumbers(number) {
  const names = ["пост", "поста", "постов"];
  const numbersRange = [
    "0",
    "5",
    "6",
    "7",
    "8",
    "9",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19"
  ];
  const numberStringified = number.toString();
  return names[
    numbersRange.forEach(numb => {
      return numberStringified.endsWith(numb);
    })
      ? 2
      : numberStringified.endsWith("1")
      ? 0
      : numberStringified.endsWith("2") ||
        numberStringified.endsWith("3") ||
        numberStringified.endsWith("4")
      ? 1
      : 2
  ];
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext; // Getting tag from context in graphql
  const { edges, totalCount } = data.allMarkdownRemark;
  // Formatting text according to posts count
  const tagHeader = (
    <>
      <span>
        {totalCount} {postsOnNumbers(totalCount)} с тегом
      </span>
      <br />
      {tag}
    </>
  );
  const date = new Date();
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
                  <p>{node.frontmatter.description}</p>
                  <p className="date-tags">
                    {/* Date of post written */}
                    <span title={node.frontmatter.date}>
                      {(() => {
                        switch (true) {
                          case node.frontmatter.date.endsWith(
                            date.getFullYear()
                          ):
                            return node.frontmatter.date.slice(
                              0,
                              node.frontmatter.date.length - 5
                            );
                          default:
                            return node.frontmatter.date;
                        }
                      })()}
                    </span>
                    {/* All tags for this post */}
                    {node.frontmatter.tags.map(tag => (
                      <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
                    ))}
                  </p>
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
