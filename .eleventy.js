const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const implicitFigures = require('markdown-it-implicit-figures');
const dateFns = require("date-fns");
const ruLocale = require('date-fns/locale/ru');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const pluginPWA = require("eleventy-plugin-pwa");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPlugin(lazyImagesPlugin, {
    cacheFile: "src/.lazyimages.json"
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("blog", ".src/layouts/post.njk");

  eleventyConfig.addFilter("shortDate", dateObj => {
    return dateFns.format(
      dateObj,
      'd MMM yyyy',
      {locale: ruLocale}
    )
  })

  eleventyConfig.addFilter("readableDate", dateObj => {
    return dateFns.format(
      dateObj,
      'dd MMMM yyyy, hh:mm, zzzz',
      {locale: ruLocale}
    )
  })

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateFns.formatISO(dateObj);
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList.js"));

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("now.json");

  let mdOptions = {
    html: true,
    typographer: true
  };

  let markdownLib = markdownIt(mdOptions).use(implicitFigures, { figcaption: true });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('./_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
