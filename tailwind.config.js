/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme from Tailwind CSS

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
    ],

  },
  plugins: [require("daisyui")],
}

