/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    // colors: {
    //   primary: colors.green,
    //   secondary: colors.yellow,
    //   neutral: colors.gray,
    // },
    extend: {},
  },
  plugins: [],
}

