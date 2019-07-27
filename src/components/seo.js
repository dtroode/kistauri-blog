/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
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

  // Using description of page or default description
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      // Creating title using title of page + default title.
      // Separating by `|` symbol
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      image={site.siteMetadata.image}
      meta={[
        {
          name: `google-site-verification`,
          content: `VoK2q3VroEahQph7ziCc0_ADrkMii1Rsq_wtw1KCsp8`
        },
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
          content: `https://david-kistauri.dtroode.now.sh${image}`
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
          content: `https://david-kistauri.dtroode.now.sh${image}`
        }
      ].concat(meta)}
    >
      <link rel="me" href="https://twitter.com/dtroode" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `ru`, // Lang of the page
  meta: [],
  description: `Назови любое слово и я сделаю об этом сайт.`,
  title: `Давид Кистаури`,
  image: `/img/preview.jpg`
};

export default SEO;
