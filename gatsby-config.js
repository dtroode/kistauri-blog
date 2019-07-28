module.exports = {
  siteMetadata: {
    title: `Давид Кистаури`,
    description: `Назови любое слово и я сделаю об этом сайт`,
    author: `Давид Кистаури`,
    image: `/img/preview.jpg`,
    siteUrl: `https://kistauri.dtroode.now.sh/`,
    blogUrl: `https://kistauri.dtroode.now.sh/blog/`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-offline",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Kistauri`,
        short_name: `David`,
        start_url: `/`,
        background_color: `#F1F2F6`,
        theme_color: `#3742FA`,
        display: `minimal-ui`,
        icon: `src/images/logo/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://kistauri.dtroode.now.sh/`,
        sitemap: `https://kistauri.dtroode.now.sh/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }]
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
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
            output: "/blog/rss/index.xml",
            title: "Дэтруд | Блог Давида Кистаури"
          }
        ]
      }
    }
  ]
};
