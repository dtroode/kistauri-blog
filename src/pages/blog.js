import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../styles/articles.scss";
import "../styles/media.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const PostsList = props.data.Posts.edges;
  return (
    <Layout pageClass="blog" title="David Kistauri Blog">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog" />
      </Helmet>
      <SEO
        title="Blog"
        description="Whoa! Welcome to my, David Kistauri's Blog! Name any word and i'll make an article about it"
        image="/img/preview.jpg"
      />
      <section className="main__arts main__arts--first">
        {PostsList.map(({ node }) => (
          <>
            <article id={node.frontmatter.categories}>
              <section className="main__art-cont">
                <Link to={node.fields.slug}>
                  <span className="main__art-cont__name">
                    {node.frontmatter.title}
                  </span>
                </Link>
                <p className="main__art-cont__inf">
                  {node.frontmatter.date} • {node.timeToRead} min read
                </p>
                <section dangerouslySetInnerHTML={{ __html: node.html }} />
              </section>
            </article>
            <hr />
          </>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query {
    Posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`;
