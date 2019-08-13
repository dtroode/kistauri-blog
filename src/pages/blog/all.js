import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../../styles/articles.scss";
import "../../styles/media.scss";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

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
      <section className="main__content">
        <h2 className="main__content__tag-header">
          {props.data.AllPosts.totalCount}{" "}
          {postsOnNumbers(props.data.AllPosts.totalCount)}
        </h2>
        <p className="main__content__tag-container">
          {/* All posts list */}
          {AllPostsList.map(({ node }) => (
            <React.Fragment key={node.frontmatter.title}>
              <Link className="a--secondary" to={node.fields.slug}>
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
