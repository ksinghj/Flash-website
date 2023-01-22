const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ma: ['var(--font-ma)', ...fontFamily.sans]
      },
      width: {
        xs: '19rem'
      },
      maxWidth: {
        xs: '19rem'
      }
    },
    // note body bg is set in global css
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'light-blue': '#1A5AFF',
      'light-blue-darker': '#1441B3',
      'dark-blue': '#0A0950', // night sky theme
      'dark-grey': '#2E2E2E',
      "light-grey-tl": "#D6D6D67A", // translucent
      'red': '#E41F1F',
      'green': '#38D900',
      'flash-yellow': '#FFBE18',
      'flash-yellow-darker': '#E7A600',
      'light-grey': '#E8E8E8'
    },
  },
  plugins: [],
  darkMode: 'class'
}