class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['./'],
    }),
    require('tailwindcss')('./tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
    }),
  ],
};
