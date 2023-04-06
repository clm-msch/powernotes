/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7BF867',
        primary_dark: '#4AF03B',
        secondary: '#DAFFE2',
        white: '#180F11',
        black: '#180F11',
        grey: '#362C2E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}