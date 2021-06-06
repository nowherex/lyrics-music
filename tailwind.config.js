// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#1D213F',
        'secondary': '#252849',
        'selected': '#2E325C',
        'selected-light': '#565A84',
        'primary-light': '#4E5389',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',
      }
    },
  },
};
