/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#65a30d",
        d: "#006400",
        secondary: "#64748b",
        dark: "#172554",
        // dark: "#0f172a",
      },
      screens: {
        xs: "475px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
