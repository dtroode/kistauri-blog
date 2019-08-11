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
  // Sorting tags by number of posts that use them
  group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout pageClass="tags" title="Давид Кистаури. Блог. Теги">
      <Helmet>
        <link rel="canonical" href="https://kistauri.dtroode.now.sh/blog" />
      </Helmet>
      <SEO
        title="Теги"
        description="Блог Давида Кистаури. Теги"
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2 className="main__content__tag-header">Теги по количеству постов</h2>
        <p className="main__content__tag-container">
          {/* All tags sorted */}
          {group.map(tag => (
            <Link
              className="a--secondary"
              to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
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

// Getting 2000 latest posts tags
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
