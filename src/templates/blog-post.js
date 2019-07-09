import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
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
      category={post.frontmatter.categories}
      link={post.fields.slug}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.hero.childImageSharp.fluid.src}
      />
      <section className="main__art-cont">
        <p className="main__art-cont__inf">
          {post.frontmatter.date} • {post.timeToRead} min read
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
};

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
        date(formatString: "MMMM D, YYYY")
        categories
        description
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
