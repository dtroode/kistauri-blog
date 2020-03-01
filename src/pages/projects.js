import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { format, isToday, isYesterday, isThisYear } from 'date-fns'

import Layout from '../components/layout'
import SEO from '../components/seo'

import articleStyles from '../styles/article.module.scss'

const ProjectsList = ({ data }) => {
  const ProjectsList = data.Projects.edges
  const ruLocale = require('date-fns/locale/ru')

  return (
    <Layout pageClass="projects" title="Давид Кистаури. Проекты">
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/projects" />
      </Helmet>
      <SEO
        title="Проекты"
        description="Проекты Давида Кистаури. Назови любое слово и я сделаю о нем сайт."
        image="/img/preview.jpg"
      />
      <section className="main__sect--arts">
        {/* Displaying all projects according to limit */}
        {ProjectsList.map(({ node }) => (
          <article key={node.frontmatter.title} className={articleStyles.art}>
            <Link to={node.fields.slug} className={articleStyles.art__link}>
              <Img
                fluid={node.frontmatter.hero.childImageSharp.fluid}
                className={articleStyles.art__link__img}
              />
              <section
                className={`${articleStyles.art__link__sect} ${articleStyles.art__link__proj}`}
              >
                <h2>{node.frontmatter.title}</h2>
                <p className={articleStyles.art__link__sect__p}>
                  {node.frontmatter.description}
                </p>
                <p className={`${articleStyles.art__link__sect__p} postlinks`}>
                  {/* Date of post written */}
                  <span
                    title={
                      format(node.frontmatter.date, 'dddd, D MMMM YYYY', {
                        locale: ruLocale
                      })
                        .charAt(0)
                        .toUpperCase() +
                      format(node.frontmatter.date, 'dddd, D MMMM YYYY', {
                        locale: ruLocale
                      }).slice(1)
                    }
                    className="postlinks__span"
                  >
                    {(() => {
                      if (isToday(node.frontmatter.date)) {
                        return 'сегодня'
                      } else if (isYesterday(node.frontmatter.date)) {
                        return 'вчера'
                      } else if (isThisYear(node.frontmatter.date)) {
                        return format(node.frontmatter.date, 'D MMMM', {
                          locale: ruLocale
                        })
                      } else {
                        return format(node.frontmatter.date, 'D MMMM YYYY', {
                          locale: ruLocale
                        })
                      }
                    })()}
                  </span>
                </p>
              </section>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

ProjectsList.propTypes = {
  data: PropTypes.object
}

export default ProjectsList

// Getting projects list
export const projectsListQuery = graphql`
  query projectsListQuery {
    Projects: allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
            hero {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
