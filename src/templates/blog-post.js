import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import "../styles/post.scss";
import "../styles/media.scss";
import "../styles/code.scss";
import SEO from "../components/seo";

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const date = new Date();
  const { prev, next } = pageContext;

  return (
    <Layout
      pageClass="post"
      title={post.frontmatter.title}
      link={post.fields.slug} // Link to this page for using in header and footer
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.hero.childImageSharp.fluid.src}
      />
      <section className="main__sect--text">
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="post-links">
          {/* Date of post written */}
          <span title={post.frontmatter.date} className="post-links__span">
            {(() => {
              switch (true) {
                case post.frontmatter.date.endsWith(date.getFullYear()):
                  return post.frontmatter.date.slice(
                    0,
                    post.frontmatter.date.length - 5
                  );
                default:
                  return post.frontmatter.date;
              }
            })()}
          </span>
          <span className="post-links__span">·</span>
          {/* All tags for this post */}
          {post.frontmatter.tags.map(tag => (
            <Link
              to={`/blog/tags/${kebabCase(tag)}`}
              key={tag}
              className="post-links__a"
            >
              {tag}
            </Link>
          ))}
          <br />
          {/* Links to next and previous pages */}
          {prev ? (
            <Link to={prev.node.fields.slug} className="post-links__a">
              {prev.node.frontmatter.title} ←
            </Link>
          ) : (
            <span className="post-links__span--inact">←</span>
          )}
          {next ? (
            <Link to={next.node.fields.slug} className="post-links__a">
              → {next.node.frontmatter.title}
            </Link>
          ) : (
            <span className="post-links__span--inact">→</span>
          )}
        </p>
      </section>
    </Layout>
  );
};

// Getting all information for this post:
// Title
// Date written
// Description
// All tags list
// Title image
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "D MMMM YYYY", locale: "ru")
        description
        tags
        hero {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
