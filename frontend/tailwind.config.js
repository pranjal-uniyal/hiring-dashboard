module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1199px' },
      desktop: { min: '1200px' },
    },
  },
  plugins: [],
};
