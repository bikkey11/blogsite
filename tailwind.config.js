/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgColor": "#090d1f"
      },
      fontFamily: {
        "roboto-mono":["Roboto Mono"],
        "Quicksand":["Quicksand"]
      },
      screens:{
        "cxl":'1200px'
      }
    
    },
  },
  plugins: [],
}