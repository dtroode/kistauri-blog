import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = props => {
  const PostsList = props.data.Posts.edges;
  return (
    <Layout pageClass="blog" title="Давид Кистаури. Блог">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO
        title="Блог"
        description="Блог Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__arts">
        {PostsList.map(({ node }) => (
          <article
            id={node.frontmatter.categories}
            key={node.frontmatter.title}
          >
            <Link to={node.fields.slug}>
              <section className="art__cont">
                <h2>{node.frontmatter.title}</h2>
                <p>
                  <span>{node.frontmatter.date}</span> •{" "}
                  <span>{node.timeToRead}</span> мин.
                </p>
                <p>{node.frontmatter.description}</p>
              </section>
            </Link>
          </article>
        ))}
        <Link to="/blog/all" className="main__arts__all a--secondary">
          Все посты
        </Link>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const listQuery = graphql`
  query {
    Posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 20
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM YYYY", locale: "ru")
            description
            categories
          }
          timeToRead
        }
      }
    }
  }
`;
