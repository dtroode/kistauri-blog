import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../../styles/articles.scss";
import "../../styles/media.scss";
import kebabCase from "lodash/kebabCase";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => {
  group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout pageClass="tags" title="Давид Кистаури. Теги">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO
        title="Теги"
        description="Блог Давида Кистаури. Теги"
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2 className="main__content__tag-header">Теги по количеству постов</h2>
        <p className="main__content__tag-container">
          {group.map(tag => (
            <Link
              to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
              className="a--secondary"
            >
              ({tag.totalCount}) {tag.fieldValue}
            </Link>
          ))}
        </p>
      </section>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
