const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "860px" },
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(139, 148, 158, 0.25)",
          "0 45px 65px rgba(139, 148, 158, 0.15)",
        ],
      },
      colors: {
        purpleAccent: "rgb(120, 63, 245, 0.25)",
        purpleAccent2: "rgb(60, 24, 134, 0.25)",
        scrollbar: "rgb(193, 126, 243)",
        purpleButton: "#af58f0",
        purpleButtonLight: "#c17ef3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
