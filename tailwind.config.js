/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./app/routes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '512px',
        'sm': '768px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1440px',
        '2xl': '1600px',
        '3xl': '1780px'
      },
      colors: {
        "liquid": {
          900: "#050F16",
          800: "#08222C",
          700: "#093C44",
          600: "#085E5E",
          500: "#347275",
          400: "#5F898D",
          300: "#89A3A7",
          200: "#B1BFC2",
          100: "#D8DDDF",
        }
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4',
        6: '6',
        8: '8'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}