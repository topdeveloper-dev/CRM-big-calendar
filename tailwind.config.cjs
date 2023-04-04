/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "light-indigo": "#f1f4feff",
        primary: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#1e88e5",
          600: "#1976d2",
          700: "#1565c0",
          800: "#0d47a1",
          900: "#0d47a1",
        },
        gray: {
          300: "rgb(196, 194, 194)",
        },
      },
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
    },
  },
  plugins: [],
};
