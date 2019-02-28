const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    purgecss({
      content: ['./*.html'],
    }),
    autoprefixer,
  ],
};