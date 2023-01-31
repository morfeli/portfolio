/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const styles = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".animate-delay-sphere-2": {
      animationDelay: "2s",
    },
    ".animate-delay-sphere-3": {
      animationDelay: "4s",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#001219",
        typographySecondary: "#afbac1",
      },
      gridTemplateColumns: {
        repeatMin300px: "repeat(auto-fit,minmax(300px,1fr))",
        imageGrid: "repeat(auto-fit, minmax(375px, 1fr))",
        imageGridMD: "repeat(auto-fit, minmax(325px, 1fr))",
      },
      height: {
        backfaceHeight: "22.3rem",
        comingSoon: "32vh",
      },
    },
  },
  plugins: [styles],
};
