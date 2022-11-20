/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    container: {
      screens: {
        lg: "1050px"
      },
      center : true
    },
    extend: {
      colors: {
        "primary" : "#96BB7C",
        "second" : "#737373",
        "title" : "#252B42"
      },
      fontFamily:{
        "montserrat" : ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
}
