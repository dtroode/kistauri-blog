import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import "../styles/post.scss";
import "../styles/media.scss";
import "../styles/code.scss";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  const date = new Date();
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
      <section className="main__art-cont">
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="date-tags">
          {/* Date of post written */}
          <span title={post.frontmatter.date}>
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
          {/* All tags for this post */}
          {post.frontmatter.tags.map(tag => (
            <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
          ))}
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
