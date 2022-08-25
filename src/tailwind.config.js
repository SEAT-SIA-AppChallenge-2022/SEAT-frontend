module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      helvetica: ['Helvetica Neue', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'water-texture': "url('../assets/imgs/background.jpeg')",
      },
    },
    colors: {
      black: '#000',
      white: '#ffffff',
      grey: '#F0F0F0',
      yellow: '#ffe900',
      transparentGrey: '#666666d9',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
