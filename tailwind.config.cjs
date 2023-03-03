/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}','./src/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
