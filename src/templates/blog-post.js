import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import kebabCase from "lodash/kebabCase";
import "../styles/fonts-styles/mono.scss";
import "../styles/pages-styles/post.scss";
import "../styles/media.scss";
import "../styles/code.scss";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
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
        <p className="main__art-cont__inf">
          {/* Date of post written */}
          <time dateTime="">{post.frontmatter.date}</time> •{" "}
          {/* Post read time */}
          <span>{post.timeToRead}</span> мин.
          <br />
          {/* All tags for this post */}
          {post.frontmatter.tags.map(tag => (
            <>
              <Link to={`/blog/tags/${kebabCase(tag)}`}>{tag}</Link>
            </>
          ))}
        </p>
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
