const { thonUI, thonUIContent } = require('thon-ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', 'src/**/*.tsx', thonUIContent()],
  theme: {
    colors: {
      'body-background': '#F9FAFB',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        code: ['Courier Prime', 'monospace'],
      },
      backgroundImage: {
        'linear-bottom-white':
          'linear-gradient(180deg, rgba(249, 250, 251, 0) 0%, #F9FAFB 100%)',
      },
    },
  },
  plugins: [thonUI()],
};
