/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
        roboto:["Roboto", "sans-serif"],
        bebas:["Bebas Neue", "sans-serif"]

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
      },
    },
  },
  plugins: [],
}