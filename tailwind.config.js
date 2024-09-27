/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      raleway: {
        regular: 'Raleway',
      },
    },
    extend: {
      colors: {
        fontColor: '#808285', // Custom font color
        bgColor: '#00bdbb', // Custom background color
        headingColor: '#363636',
      },
    },
  },
  plugins: [],
};
