import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../../styles/archive.css";
import "../../styles/mobile.css";
import "../../styles/dark.css";
import Layout from "../../components/layout";

const ArchivePage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="archive" title="David Kistauri Archive">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Archive</title>
        <link rel="canonical" href="https://dtroode.netlify.com/blog/archive" />
      </Helmet>
      <section className="articles">
        {postList.edges.map(({ node }) => (
          <article className={node.frontmatter.categories}>
            <Link to={node.fields.slug} className="page-link">
              <section className="page-content">
                <h2>{node.frontmatter.title}</h2>
                <p className="date-mins">
                  {node.frontmatter.date} • {node.timeToRead} min read
                </p>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default ArchivePage;

export const archiveQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            categories
          }
          timeToRead
        }
      }
    }
  }
`;
