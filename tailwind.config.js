/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0101',
        lightGray: '#FBFBFB',
        gray: '#74798C',
        darkGray: '#282D30',
        blue: '#4AB8FF',
        yellow: '#FDCC0C',
        pink: '#FD5181',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|lightGray|gray|darkGray|blue|yellow|pink)/,
    },
  ],
};
