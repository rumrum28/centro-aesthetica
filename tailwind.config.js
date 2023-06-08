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
        'custom-gold':
          'radial-gradient( ellipse farthest-corner at right bottom, #776100 0%, #be8513 8%, #b67d01 30%, #815e0c 40%, transparent 80% ), radial-gradient( ellipse farthest-corner at left top, #e09d00 0%, #ce8600 8%, #d6ae40 25%, #eca601 62.5%, #e09d00 100% )',
      },

      colors: {
        'custom-gold-background':
          'radial-gradient( ellipse farthest-corner at right bottom, #bd9c08 0%, #be8513 8%, #b67d01 30%, #a78025 40%, transparent 80% ), radial-gradient( ellipse farthest-corner at left top, #d3d324 0%, #cfcf2a 8%, #d6ae40 25%, #8d6e25 62.5%, #74540b 100% )',
      },
    },
  },
  plugins: [],
}
