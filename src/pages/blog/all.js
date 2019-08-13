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
