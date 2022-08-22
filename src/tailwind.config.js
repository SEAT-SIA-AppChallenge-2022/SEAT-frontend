module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: { Inter: ['Inter', 'sans-serif'] },
    extend: {},
    colors: {
      white: '#ffffff',
      grey: '#f5f5f5',
      yellow: 'FFE900',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
