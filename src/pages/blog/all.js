import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../../styles/articles.scss";
import "../../styles/media.scss";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const AllPage = props => {
  const AllPostsList = props.data.AllPosts.edges;
  return (
    <Layout pageClass="posts" title="Давид Кистаури. Посты">
      <Helmet>
        <link rel="canonical" href="https://david-kistauri.dtroode.now.sh/blog" />
      </Helmet>
      <SEO
        title="Посты"
        description="Блог Давида Кистаури. Посты"
        image="/img/preview.jpg"
      />
      <section className="main__content">
        <h2 className="main__content__tag-header">Посты за все время</h2>
        <p className="main__content__tag-container">
          {/* All posts list */}
          {AllPostsList.map(({ node }) => (
            <>
              <Link className="a--secondary" to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <br />
            </>
          ))}
        </p>
      </section>
    </Layout>
  );
};

export default AllPage;

export const allPageQuery = graphql`
  query {
    AllPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
