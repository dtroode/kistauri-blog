import React from "react"

import { graphql } from "gatsby"
import { format, isToday, isYesterday, isThisYear } from "date-fns"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/post.scss"
import postStyles from "../styles/post.module.scss"
import "../styles/media.scss"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { slug, title, date, description } = pageContext
  const ruLocale = require("date-fns/locale/ru")

  return (
    <Layout
      pageClass="project"
      title={title}
      link={slug} // Link to this page for using in footer
      linkToProject={post.frontmatter.link} // Link to project page
    >
      <SEO
        title={title}
        description={description}
        image={post.frontmatter.hero.childImageSharp.fluid.src}
      />
      <section className={`${postStyles.text} main__sect--text`}>
        <p className="postlinks">
          {/* Date of post written */}
          <time
            datetime={
              format(date, "YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)", {
                locale: ruLocale,
              })
                .charAt(0)
                .toUpperCase() +
              format(date, "YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)", {
                locale: ruLocale,
              }).slice(1)
            }
            className="postlinks__time"
          >
            {(() => {
              if (isToday(date)) {
                return "сегодня"
              } else if (isYesterday(date)) {
                return "вчера"
              } else if (isThisYear(date)) {
                return format(date, "D MMMM", {
                  locale: ruLocale,
                })
              } else {
                return format(date, "D MMMM YYYY", {
                  locale: ruLocale,
                })
              }
            })()}
          </time>
        </p>
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  )
}

// Getting all information for this post:
// Title
// Date written
// Description
// Title image
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
`
