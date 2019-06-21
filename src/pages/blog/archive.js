import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../../styles/pages/archive.scss";
import "../../styles/mobile.scss";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const ArchivePage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout pageClass="archive" title="David Kistauri Archive">
      <Helmet>
        <link rel="canonical" href="https://dtroode.netlify.com/blog/archive" />
      </Helmet>
      <SEO title="Archive" description="You just now find the archive of David Kistauri's blog. Be careful!" image="/img/preview.jpg"/>
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
