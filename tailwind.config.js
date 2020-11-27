/* eslint-disable global-require */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '10v': '10vh',
      '20v': '20vh',
      '30v': '30vh',
      '40v': '40vh',
      '50v': '50vh',
      '60v': '60vh',
      '70v': '70vh',
      '80v': '80vh',
      '90v': '90vh',
      '100v': '100vh',
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/custom-forms')],
};
