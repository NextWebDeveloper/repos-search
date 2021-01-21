module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: "#2F2F2F",
      accent: "#DE7064",
      grey: {
        light: "#ECECEC",
        DEFAULT: "#CECECE",
      },
      transparent: "transparent",
    },
    extend: {
      inset: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
