/** @type {import('tailwindcss').Config} */
export default {
  content: ["App.jsx", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'vsm': '360px',
      }
    },

  },
  plugins: [],
}

