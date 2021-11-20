const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['Goldman', 'cursive'],
        text: ['Ubuntu', 'sans-serif']
      },
      colors: {
        primary: colors.blue["500"],
        secondary: colors.coolGray["700"]
      }
    },

  },
  variants: {
    extend: {}
  },
  plugins: []
};
