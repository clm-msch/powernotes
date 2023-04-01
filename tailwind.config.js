/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F86781',
        primary_dark: '#F03B5C',
        secondary: '#FFDADA',
        white: '#FBF4F4',
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