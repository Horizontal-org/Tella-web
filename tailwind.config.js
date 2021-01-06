/* eslint-disable */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.tsx', './layouts/**/*.tsx', './components/**/*.tsx'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      blue: {
        light: '#e9f2ff',
        50: '#3eacf1',
        100: '#34a2e7',
        200: '#2a98dd',
        300: '#008DEC',
        400: '#0082d9',
        500: '#0c7abf',
        600: '#0270b5',
        700: '#0066ab',
        800: '#005ca1',
        900: '#005297',
      },
    },
    fontSize: {
      sm: ['11px', '14px'],
      base: ['14px', '16.8px'],
      lg: ['16px', '24px'],
      xl: ['20px', '28px'],
      xxl: ['3rem', '4rem'],
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      inbox: 'inset -3px 2px 2px rgba(0, 0, 0, 0.15), inset 2px -2px 2px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      boxShadow: ['active'],
    },
  },
}
