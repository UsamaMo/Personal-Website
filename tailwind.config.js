/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme from Tailwind CSS

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px', // Customize the sm breakpoint to 480px
      'md': '768px', // Keep the default md breakpoint
      'lg': '1024px', // Keep the default lg breakpoint
      'xl': '1280px', // Keep the default xl breakpoint
      '2xl': '1536px', // Keep the default 2xl breakpoint
    }, 
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

