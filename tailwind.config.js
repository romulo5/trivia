/* eslint-disable global-require */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/custom-forms')],
};
