module.exports = {
  purge: ["./src/App.vue", 
  "./src/components/*.vue"
  ],
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
        'Inter': ['"Inter"', 'sans-serif'],
        'Sunydale': ['"Sunydale"', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
