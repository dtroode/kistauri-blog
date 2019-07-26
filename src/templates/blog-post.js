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

const ListLink = props => (
  <Link to={props.to} className={props.className}>
    {props.children}
  </Link>
);

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
          <time datetime="">{post.frontmatter.date}</time> •{" "}
          <span>{post.timeToRead}</span> мин.
          <br />
          {post.frontmatter.tags.map(tag => (
            <>
              <ListLink to={`/blog/tags/${kebabCase(tag)}`}>{tag}</ListLink>
            </>
          ))}
        </p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
