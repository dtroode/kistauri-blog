module.exports = {
  siteMetadata: {
    title: `Давид Кистаури`,
    description: `Назови любое слово и я сделаю об этом сайт`,
    author: `Давид Кистаури`,
    image: `/img/preview.jpg`,
    siteUrl: `https://davidkistauri.ru/`,
    blogUrl: `https://davidkistauri.ru/blog/`
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/all`,
        name: "posts"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/projects`,
        name: "projects"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Давид Кистаури`,
        short_name: `Давид`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#2962ff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          `gatsby-remark-typography`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              showCaptions: true,
              backgroundColor: "transparent",
              quality: 90,
              loading: "lazy"
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                blogUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: edge.node.fields.slug,
                  guid: edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Блог Давида Кистаури"
          }
        ]
      }
    }
  ]
};
