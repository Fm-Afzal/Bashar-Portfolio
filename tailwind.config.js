/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'bg-white': "url('./assets/svg/bg.svg')",
        'bg-dark': "url('./assets/svg/bg-dark.svg')",  
      },
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
      },
    },
  },
  plugins: [],
}

