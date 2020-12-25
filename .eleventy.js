const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginJsonFeed = require("eleventy-plugin-json-feed");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const dateFns = require("date-fns");
const ruLocale = require("date-fns/locale/ru");
const pluginPWA = require("eleventy-plugin-pwa");
const htmlmin = require("html-minifier");
const sharp = require("sharp");
const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginJsonFeed, {
    content_html: true,
    image_metadata_field_name: "social_media_image",
    summary_metadata_field_name: "description",
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/**/*.{scss,sass}", "!node_modules/**"],
  });

  // Responsive images with captions
  eleventyConfig.addTransform("images", function (content, outputPath) {
    const blog = /blog\/([a-zA-Z0-9_-]+)/i;
    const projects = /projects\/([a-zA-Z0-9_-]+)\/index\.html/i;
    const imagesInParagraph = /\<p\>\<img src\=\"\/images\/([^\.]*).([^\"]*)\" alt\=\"([^\"]*)\"((?!img--nocaption).)*\>\<\/p\>/gi;
    const images = /\<img src\=\"\/images\/([^\.]*).([^\"]*)\" alt\=\"([^\"]*)\"((?!img--nocaption).)*\>/gi;
    // Image sizes property for adaptive images
    const sizes =
      "(max-width: calc(1000px + 2 * 2.4rem)) calc(100vw - 2 * 2.4rem), 1000px";

    // Generate a responsive images
    // and create markup by url, image extension and alternate text
    function generateImage(url, extension, alt) {
      // Get image
      const image = sharp(`src/images/${url}.${extension}`);
      // Resize image to 320px and 640px
      const smallImage = image.clone().resize({ width: 320 });
      const mediumImage = image.clone().resize({ width: 640 });
      // Generate a webp version of a large image
      image.clone().webp().toFile(`_site/images/${url}.webp`);
      // Generate a small original and webp image
      smallImage.clone().toFile(`_site/images/${url}-small.${extension}`);
      smallImage.clone().webp().toFile(`_site/images/${url}-small.webp`);
      // Generate a medium original and webp image
      mediumImage.clone().toFile(`_site/images/${url}-medium.${extension}`);
      mediumImage.clone().webp().toFile(`_site/images/${url}-medium.webp`);

      return `
        <figure>
          <picture>
            <source
              srcset="/images/${url}-small.webp 320w,
                      /images/${url}-medium.webp 640w,
                      /images/${url}.webp 1000w"
              sizes="${sizes}"
              type="image/webp">
            <img
              src="/images/${url}.${extension}"
              data-src="auto"
              srcset="/images/${url}-small.${extension} 320w,
                      /images/${url}-medium.${extension} 640w,
                      /images/${url}.${extension} 1000w"
              data-srcset="/images/${url}-small.${extension} 320w,
                          /images/${url}-medium.${extension} 640w,
                          /images/${url}.${extension} 1000w"
              sizes="${sizes}"
              alt="${alt}" loading="lazy">
          </picture>
          <figcaption>${alt}</figcaption>
        </figure>`;
    }

    if (outputPath && (outputPath.match(blog) || outputPath.match(projects))) {
      content = content.replace(imagesInParagraph, (match, p1, p2, p3) => {
        return generateImage(p1, p2, p3);
      });
      content = content.replace(images, (match, p1, p2, p3) => {
        return generateImage(p1, p2, p3);
      });
    }

    return content;
  });

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("blog", ".src/layouts/post.njk");

  // Filter to generate short date in D MMM YYYY format
  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return dateFns.format(dateObj, "d MMMM yyyy", { locale: ruLocale });
  });

  // Filter to generate full human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateFns.format(dateObj, "dd MMMM yyyy, hh:mm, zzzz", {
      locale: ruLocale,
    });
  });

  // Filter to generate date for HTML tag
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateFns.formatISO(dateObj);
  });

  // Filter to replace spaces with unicode characters
  // in title for URL
  eleventyConfig.addFilter("sharePostTitle", (title) => {
    return title.replace(/ /g, "%20");
  });

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList.js"));

  // Copy directories to output
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/icon.svg");
  eleventyConfig.addPassthroughCopy("src/icon-512.png");
  eleventyConfig.addPassthroughCopy("src/icon-192.png");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("now.json");

  // Markdown parser options
  let mdOptions = {
    html: true,
    typographer: true,
  };

  let markdownLib = markdownIt(mdOptions);

  eleventyConfig.setLibrary("md", markdownLib);

  // Redirect to 404 page when error status is 404
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("./_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
