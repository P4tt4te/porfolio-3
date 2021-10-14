module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#00D1FF',
        dark: '#0066FF',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      grey: {
        DEFAULT: '#363636',
      }
    },
    extend: {
      fontFamily: {
        'Inter': ['"Inter"', 'serif'],
        'Sunydale': ['"Sunydale"', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
