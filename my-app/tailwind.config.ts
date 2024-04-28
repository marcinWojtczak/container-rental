/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/kontener4.jpeg")'
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',  
      'lg': '1154px', 
      'xl': '1380px', 
    },
  },
  plugins: [],
} 