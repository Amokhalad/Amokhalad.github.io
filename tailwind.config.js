const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#28A745',
        secondary: '#155724',
        highlight: '#FFB400',
      },
      backgroundImage: {
        'home-banner': "url('images/banner3.jpeg')",
      },
    },
  },
  plugins: [],
}

