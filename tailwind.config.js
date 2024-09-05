/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        madeCanvas: ["MADE Canvas", "sans-serif"]
      },
      colors: {
        'olive-light': '#576665',
        'light-gray': '#ECECEC',
        'red-light': '#FFD6D6',
      },
      fontSize: {
        '21': '21px',
        '10xl': '132px',
        '0':'1px'
      },
    },
  },
  plugins: [],
}

