/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        deep_black: '#1d1d1d',
        main_green: '#00d1cd',
        border_color: '#343434'
       
      },
      fontFamily: {
        fontPirmas: ['Source Sans 3']
      }
      


    },
  },
  plugins: [],
}

