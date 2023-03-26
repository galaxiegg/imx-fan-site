/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 5, 44, 1)",
        secondary: "#03DEFF",
      },
    },
  },
  plugins: [],
};
