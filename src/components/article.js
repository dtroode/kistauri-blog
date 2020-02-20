import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { format, isToday, isYesterday, isThisYear } from 'date-fns'

import articleStyles from '../styles/article.module.scss'

const Article = props => {
  const ruLocale = require('date-fns/locale/ru')

  const category =
    props.node.frontmatter.categories === 'work'
      ? articleStyles.work
      : props.node.frontmatter.categories === 'thoughts'
        ? articleStyles.thoughts
        : props.node.frontmatter.categories === 'advices'
          ? articleStyles.advices
          : articleStyles.learning

  return (
    <article
      key={props.node.frontmatter.title}
      className={`${articleStyles.art} ${category}`}
    >
      <Link to={props.node.fields.slug} className={articleStyles.art__link}>
        <section className={articleStyles.art__link__sect}>
          <h2>{props.node.frontmatter.title}</h2>
          <p className={articleStyles.art__link__sect__p}>
            {props.node.frontmatter.description}
          </p>
          <p className={`${articleStyles.art__link__sect__p} postlinks`}>
            {/* Date of post written */}
            <time
              dateTime={
                format(
                  props.node.frontmatter.date,
                  'YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)',
                  {
                    locale: ruLocale
                  }
                )
                  .charAt(0)
                  .toUpperCase() +
                format(
                  props.node.frontmatter.date,
                  'YYYY-MM-DDTHH:mm:ss.SSS [GMT]Z (z)',
                  {
                    locale: ruLocale
                  }
                ).slice(1)
              }
              className="postlinks__time"
            >
              {(() => {
                if (isToday(props.node.frontmatter.date)) {
                  return 'сегодня'
                } else if (isYesterday(props.node.frontmatter.date)) {
                  return 'вчера'
                } else if (isThisYear(props.node.frontmatter.date)) {
                  return format(props.node.frontmatter.date, 'D MMMM', {
                    locale: ruLocale
                  })
                } else {
                  return format(props.node.frontmatter.date, 'D MMMM YYYY', {
                    locale: ruLocale
                  })
                }
              })()}
            </time>
            {/* All tags for this post */}
            {props.node.frontmatter.tags.map(tag => (
              <span key={tag} className="postlinks__span">
                {tag}
              </span>
            ))}
          </p>
        </section>
      </Link>
    </article>
  )
}

Article.propTypes = {
  node: PropTypes.object,
  frontmatter: PropTypes.object,
  categories: PropTypes.string
}

export default Article
