import React from "react";
import { graphql } from "gatsby";
import "../styles/media.scss";
import Layout from "../components/layout";
import Article from "../components/article";
import SEO from "../components/seo";

function postsOnNumbers(number) {
  const names = ["пост", "поста", "постов"];
  const numberStringified = number.toString();
  return names[
    numberStringified.endsWith("1")
      ? numberStringified.endsWith("11")
        ? 2
        : 0
      : numberStringified.endsWith("2") ||
        numberStringified.endsWith("3") ||
        numberStringified.endsWith("4")
      ? numberStringified.endsWith("12") ||
        numberStringified.endsWith("13") ||
        numberStringified.endsWith("14")
        ? 2
        : 1
      : 2
  ];
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext; // Getting tag from context in graphql
  const { edges, totalCount } = data.allMarkdownRemark;
  // Formatting text according to posts count
  const tagHeader = (
    <>
      <span className="head__header__span">
        {totalCount} {postsOnNumbers(totalCount)} с тегом
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
      <section className="main__sect--arts">
        {/* Displaying all articles, that match this tag */}
        {edges.map(({ node }) => {
          return <Article node={node} key={node.frontmatter.title} />;
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
