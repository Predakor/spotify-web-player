/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.gray,
        text: {
          important: '#fffffff2',
          DEFAULT: '#ffffffbf',
          disabled: '#ffffff66',
        },
        background: {
          300: '#',
          200: '#3E2C41',
          100: '#121212 ',
          DEFAULT: '#000000',
        },
      },
    },
  },
  plugins: [],
};
