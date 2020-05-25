const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const dateFns = require("date-fns");
const ruLocale = require('date-fns/locale/ru');
const pluginPWA = require("eleventy-plugin-pwa");
const htmlmin = require("html-minifier");
const sharp = require('sharp');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginPWA);

  eleventyConfig.addTransform("images", function(content, outputPath) {
    let blog = /blog\/all\/([a-zA-Z0-9_-]+)\/index\.html/i;
    let projects = /projects\/([a-zA-Z0-9_-]+)\/index\.html/i;
    let imagesInParagraph = /\<p\>\<img src\=\"\/images\/([^\.]*).([^\"]*)\" alt\=\"([^\>]*)\"(.*?)\>\<\/p\>/ig;
    let images = /\<img src\=\"\/images\/([^\.]*).([^\"]*)\" alt\=\"([^\>]*)\"(.*?)\>/ig;

    function generateImage(url, extension, alt) {
      const image = sharp(`src/images/${url}.${extension}`);
      const smallImage = image.clone().resize({ width: 320 });
      const mediumImage = image.clone().resize({ width: 640 });
      image.clone().webp().toFile(`_site/images/${url}.webp`);
      smallImage.clone().toFile(`_site/images/${url}-small.${extension}`);
      smallImage.clone().webp({ quality: 80 }).toFile(`_site/images/${url}-small.webp`);
      mediumImage.clone().toFile(`_site/images/${url}-medium.${extension}`);
      mediumImage.clone().webp({ quality: 80 }).toFile(`_site/images/${url}-medium.webp`);

      return `
        <figure>
          <picture>
            <source
              srcset="/images/${url}-small.webp 320w,
                      /images/${url}-medium.webp 640w,
                      /images/${url}.webp 1000w"
              sizes="(min-width: calc(1000px + 2*2.4rem)) 1000px, 100%"
              type="image/webp">
            <img
              src="/images/${url}.${extension}"
              srcset="/images/${url}-small.${extension} 320w,
                      /images/${url}-medium.${extension} 640w,
                      /images/${url}.${extension} 1000w"
              sizes="(min-width: calc(1000px + 2*2.4rem)) 1000px, 100%"
              alt="${alt}" loading="lazy">
          </picture>
          <figcaption>${alt}</figcaption>
        </figure>`
    }

    if (outputPath && (outputPath.match(blog) || outputPath.match(projects)) ) {
      content = content.replace(imagesInParagraph, (match, p1, p2, p3) => {
        return generateImage(p1, p2, p3);
      });
      content = content.replace(images, (match, p1, p2, p3) => {
        return generateImage(p1, p2, p3);
      });
    }

    return content;
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
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

  eleventyConfig.addFilter("sharePostTitle", (title) => {
    return title.replace(/ /g, "%20")
  })

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList.js"));

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("now.json");

  let mdOptions = {
    html: true,
    typographer: true
  };

  let markdownLib = markdownIt(mdOptions)

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
