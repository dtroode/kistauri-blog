import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import Article from "../components/article";
import SEO from "../components/seo";

import "../styles/media.scss";

const counter = require("../scripts/counter");

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext; // Getting tag from context in graphql
  const { edges, totalCount } = data.allMarkdownRemark;
  // Formatting text according to posts count
  const tagHeader = (
    <>
      {tag}{" "}
      <span className="head__header__span">
        {totalCount} {counter(totalCount)}
      </span>
    </>
  );
  return (
    <Layout pageClass="tag" title={tagHeader}>
      <SEO
        title={`${totalCount} ${counter(totalCount)} с тегом ${tag}`}
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
      filter: {
        frontmatter: { tags: { in: [$tag] }, posttype: { ne: "project" } }
      }
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
            date
            description
            categories
            tags
          }
        }
      }
    }
  }
`;
