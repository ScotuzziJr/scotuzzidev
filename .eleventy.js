module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("curriculo.pdf");
  eleventyConfig.addPassthroughCopy("marc.jpg");

  // Filtro de data para posts
  eleventyConfig.addFilter("date", function(dateObj, format) {
    const { DateTime } = require("luxon");
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
