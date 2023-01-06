const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'md': { 'max': '767px' }
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(139, 148, 158, 0.25)',
          '0 45px 65px rgba(139, 148, 158, 0.15)'
        ]
      }
    },
  },
  plugins: [],
});