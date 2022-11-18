/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      screens: {
        xl: "1050px"},
      center : true
    },
    extend: {
      colors: {
        "primary" : "#96BB7C",
        "second" : "#737373",
        "text-color" : "#252B42"
      },
      fontFamily:{
        "montserrat" : ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
}
