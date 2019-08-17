import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../../styles/media.scss";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const counter = require("../../scripts/counter");

const AllPage = props => {
  const AllPostsList = props.data.AllPosts.edges;
  return (
    <Layout
      pageClass="posts"
      title={`Давид Кистаури. Блог. Посты
    `}
    >
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.now.sh/blog" />
      </Helmet>
      <SEO
        title="Посты"
        description="Блог Давида Кистаури. Посты"
        image="/img/preview.jpg"
      />
      <section className="main__sect--content">
        <h2 className="main__sect--content__header">
          {props.data.AllPosts.totalCount}{" "}
          {counter(props.data.AllPosts.totalCount)}
        </h2>
        <p className="main__sect--content__container">
          {/* All posts list */}
          {AllPostsList.map(({ node }) => (
            <React.Fragment key={node.frontmatter.title}>
              <Link to={node.fields.slug} className="a--secondary">
                {node.frontmatter.title}
              </Link>
              <br />
            </React.Fragment>
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
      totalCount
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
