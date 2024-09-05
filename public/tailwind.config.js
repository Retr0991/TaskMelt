/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
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

