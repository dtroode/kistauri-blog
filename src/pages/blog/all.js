import React from 'react'
import PropTypes from 'prop-types'

import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import kebabCase from 'lodash/kebabCase'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const counter = require('../../scripts/counter')

const AllPage = props => {
  const AllPostsList = props.data.AllPosts.edges
  const AllTagsList = props.data.AllTags.group
  AllTagsList.sort((a, b) => b.totalCount - a.totalCount)

  return (
    <Layout
      pageClass="posts"
      title={`Давид Кистаури. Блог. Заметки
    `}
    >
      <Helmet>
        <link rel="canonical" href="https://davidkistauri.ru/blog" />
      </Helmet>
      <SEO
        title="Заметки"
        description="Блог Давида Кистаури. Заметки"
        image="/img/preview.jpg"
      />
      <section className="main__sect--content">
        <h2 className="main__sect--content__header">
          Теги
        </h2>
        <p className="main__sect--content__container">
          {/* All tags sorted */}
          {AllTagsList.map(tag => (
            <Link
              to={`/blog/all/${kebabCase(tag.fieldValue)}/`}
              key={tag.fieldValue}
              className="a--secondary"
            >
              {tag.fieldValue} <span className="a__span">{tag.totalCount}</span>
            </Link>
          ))}
        </p>
      </section>
      <hr />
      <section className="main__sect--content">
        <h2 className="main__sect--content__header">
          {props.data.AllPosts.totalCount}{' '}
          {counter(props.data.AllPosts.totalCount, [
            'заметка',
            'заметки',
            'заметок'
          ])}
        </h2>
        <p className="main__sect--content__container">
          {/* All posts list */}
          {AllPostsList.map(({ node }) => (
            <React.Fragment key={node.frontmatter.title}>
              <Link to={node.fields.slug} className="a--secondary">
                {node.frontmatter.title}
              </Link>
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>
    </Layout>
  )
}

AllPage.propTypes = {
  data: PropTypes.object
}

export default AllPage

export const allPageQuery = graphql`
  query {
    AllPosts: allMarkdownRemark(
      filter: { frontmatter: { posttype: { ne: "project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
    AllTags: allMarkdownRemark(
      filter: { frontmatter: { posttype: { ne: "project" } } }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
