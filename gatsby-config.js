module.exports = {
  siteMetadata: {
    title: `Давид Кистаури`,
    description: `Назови любое слово и я сделаю об этом сайт`,
    author: `Давид Кистаури`,
    image: `/img/preview.jpg`,
    siteUrl: `https://davidkistauri.now.sh/`,
    blogUrl: `https://davidkistauri.now.sh/blog/`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-offline",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
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
        name: `Давид Кистаури`,
        short_name: `Давид`,
        start_url: `/`,
        background_color: `#f2f2f7`,
        theme_color: `#ff3b30`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-typography`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              showCaptions: true,
              backgroundColor: `#e5e5ea`,
              quality: 80,
              tracedSVG: true
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://davidkistauri.now.sh/`,
        sitemap: `https://davidkistauri.now.sh/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129332119-2"
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
            output: "/blog/rss.xml",
            title: "Дэтруд | Блог Давида Кистаури"
          }
        ]
      }
    }
  ]
};
