import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { graphql, Link } from 'gatsby'

import { format, isToday, isYesterday, isThisYear } from 'date-fns'

import Layout from '../components/layout'
import kebabCase from 'lodash/kebabCase'
import SEO from '../components/seo'
import control from '../scripts/control'

import '../styles/post.scss'
import postStyles from '../styles/post.module.scss'
import '../styles/code.scss'

const BlogPostPage = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { slug, next, prev, title, date, description, tags } = pageContext
  const ruLocale = require('date-fns/locale/ru')

  const nextSlug = next ? next.node.fields.slug : undefined
  const prevSlug = prev ? prev.node.fields.slug : undefined

  useEffect(() => {
    control(nextSlug, prevSlug)
  }, [nextSlug, prevSlug])

  return (
    <Layout
      pageClass="post"
      title={title}
      link={slug} // Link to this page for using in footer
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
            dateTime={
              format(date, 'YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)', {
                locale: ruLocale
              })
                .charAt(0)
                .toUpperCase() +
              format(date, 'YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)', {
                locale: ruLocale
              }).slice(1)
            }
            className="postlinks__time"
          >
            {(() => {
              if (isToday(date)) {
                return 'сегодня'
              } else if (isYesterday(date)) {
                return 'вчера'
              } else if (isThisYear(date)) {
                return format(date, 'D MMMM', {
                  locale: ruLocale
                })
              } else {
                return format(date, 'D MMMM YYYY', {
                  locale: ruLocale
                })
              }
            })()}
          </time>
          {/* All tags for this post */}
          {tags.map(tag => (
            <Link
              to={`/blog/all/${kebabCase(tag)}`}
              key={tag}
              className="postlinks__a"
            >
              {tag}
            </Link>
          ))}
        </p>
        {/* Content of post converted to HTML */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="postlinks">
          {/* Links to next and previous pages */}
          {prev ? (
            <>
              <Link to={prev.node.fields.slug} className="postlinks__a">
                {prev.node.frontmatter.title}
              </Link>
              <span className="postlinks__span postlinks__span--m015">←</span>
            </>
          ) : (
            <span className="postlinks__span--inact postlinks__span--m015">
              ←
            </span>
          )}
          {next ? (
            <>
              <span className="postlinks__span">→</span>
              <Link to={next.node.fields.slug} className="postlinks__a">
                {next.node.frontmatter.title}
              </Link>
            </>
          ) : (
            <span className="postlinks__span--inact">→</span>
          )}
        </p>
      </section>
    </Layout>
  )
}

BlogPostPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default BlogPostPage

// Getting all information for this post:
// Title
// Date written
// Description
// All tags list
// Title image
export const inPostQuery = graphql`
  query inPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
