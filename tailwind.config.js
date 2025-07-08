/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-se': { max: '375px' }, // custom screen for iPhone SE width and below
      }, 
    },
  },
  plugins: [],
}