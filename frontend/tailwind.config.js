/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ankh: ['AnkhSanctuary', 'sans-serif'],
        heidan: ['HeidanRounded', 'sans-serif'],
      }
    },
  },
  plugins: [],
}