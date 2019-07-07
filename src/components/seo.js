/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      image={site.siteMetadata.image}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: image
        }
      ].concat(meta)}
    >
      <link rel="me" href="https://twitter.com/dtroode" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: `David Kistauri`,
  image: `/img/preview.jpg`
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
