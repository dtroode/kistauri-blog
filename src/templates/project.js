import React from "react";

import { graphql } from "gatsby";
import { format, isToday, isYesterday, isThisYear } from "date-fns";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/post.scss";
import "../styles/media.scss";
import "../styles/code.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  const ruLocale = require("date-fns/locale/ru");

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
        <a
          href={post.frontmatter.link}
          className="a--secondary a--project-link"
        >
          Ссылка на сайт
        </a>
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="post-links">
          {/* Date of post written */}
          <span
            title={
              format(post.frontmatter.date, "dddd, D MMMM YYYY", {
                locale: ruLocale
              })
                .charAt(0)
                .toUpperCase() +
              format(post.frontmatter.date, "dddd, D MMMM YYYY", {
                locale: ruLocale
              }).slice(1)
            }
            className="post-links__span"
          >
            {(() => {
              if (isToday(post.frontmatter.date)) {
                return "сегодня";
              } else if (isYesterday(post.frontmatter.date)) {
                return "вчера";
              } else if (isThisYear(post.frontmatter.date)) {
                return format(post.frontmatter.date, "D MMMM", {
                  locale: ruLocale
                });
              } else {
                return format(post.frontmatter.date, "D MMMM YYYY", {
                  locale: ruLocale
                });
              }
            })()}
          </span>
        </p>
      </section>
    </Layout>
  );
};

// Getting all information for this post:
// Title
// Date written
// Description
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
        date
        description
        link
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
