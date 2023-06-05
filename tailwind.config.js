/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'header-pattern': "url('/images/white-background.jpg')",
        'header-patterndark': "url('/images/dark-background.jpg')",
        logo: 'linear-gradient(to right,#cb9b51 0, #f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 100%)',
      },
    },
  },
  plugins: [],
}
