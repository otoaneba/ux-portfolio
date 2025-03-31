/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'custom-bg': {
          light: '#f0e7db',
          dark: '#202023',
        },
        purple: {
          50: '#faf5ff',
          600: '#9333ea',
          700: '#7e22ce',
        }
      },
      fontFamily: {
        'custom-simpleLetter': ['simpleLetter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

