/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "desc": "#505F98"
      }
    },
    fontFamily: {
      roboto: ['Roboto'],
      roboto5: ['Roboto500'],
      roboto7: ['Roboto700'],
      roboto9: ['Roboto900'],
    }
  },
  plugins: [],
}