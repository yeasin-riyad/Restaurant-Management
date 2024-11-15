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
        'middle-container': "url('https://i.ibb.co.com/ggsnW6V/bg.jpg')",
        'interior-design':"url('https://i.ibb.co.com/p0DhJ9D/Restaurant-Interior.jpg')",

      },
      colors: {
        customColor: 'rgb(251, 247, 242)',
        YElloW:'hsl(45, 100%, 50%)',
        customRed:'hsl(5, 73%, 45%)'
      },

    },
  },
  plugins: [],
}