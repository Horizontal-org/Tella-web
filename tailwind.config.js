// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      blue: {
        light: '#e9f2ff',
        50: '#3eacf1',
        100: '#34a2e7',
        200: '#2a98dd',
        300: '#208ed3',
        400: '#1684c9',
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
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
