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
        'header-pattern': "url('/images/background-test-2.jpg')",
        'header-patterndark': "url('/images/test.jpg')",
      },
    },
  },
  plugins: [],
}
