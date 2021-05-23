module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          550: '#565656',
          650: '#41484E',
        }
      },
    },
    fontFamily: {
      sans: '"Open Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
    },
  },
  variants: {
    extend: {
      textAlign: ['first', 'last'],
      borderWidth: ['first', 'last'],
    },
  },
  plugins: [],
}
