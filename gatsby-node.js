const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

// Creating slug from page name
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
  fmImagesToRelative(node);
};

// Creating posts from md, blog pages and tag pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // Template files for creating new pages
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const projectTemplate = path.resolve("src/templates/project.js");
  const tagTemplate = path.resolve("src/templates/tags.js");
  const blogListTemplate = path.resolve("src/templates/blog-list-template.js");

  // Getting all markdown posts
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
              tags
              posttype
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.posttype === "project") {
        createPage({
          path: node.fields.slug,
          component: projectTemplate,
          context: {
            slug: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            description: node.frontmatter.description
          }
        });
      } else {
        const posts = result.data.allMarkdownRemark.edges.filter(
          ({ node }) => !node.frontmatter.posttype
        ); // Posts list
        const postsPerPage = 10; // Posts per blog page number
        const numPages = Math.ceil(posts.length / postsPerPage); // Getting number of blog pages

        // Creating posts pages
        posts.forEach(({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: node.fields.slug,
              next: index === 0 ? null : posts[index - 1],
              prev: index === result.length - 1 ? null : posts[index + 1],
              title: node.frontmatter.title,
              date: node.frontmatter.date,
              description: node.frontmatter.description,
              tags: node.frontmatter.tags
            }
          });
        });
        let tags = [];
        // Getting tags from pages, writing to `tags` variable
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });

        // Creating blog pages templates. [pagination]
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
            component: blogListTemplate,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            }
          });
        });

        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Creating tags pages for each tag we get from posts
        tags.forEach(tag => {
          createPage({
            path: `/blog/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        });
      }
    });
  });
};
