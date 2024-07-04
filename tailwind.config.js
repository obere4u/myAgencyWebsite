/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          obereBlack: "#141217",
          obereWhite: "#FDF7FF",
          obereGrey: "#FFFFFF",
          obereYellow: "#FFFF00",
        },
        secondary: {
          darkGrey: "#2b2b2b",
          lightGrey: "#f7fafc",
          white: "#FDF7FF",
          blueDark: "#080d27",
          blueLight: "#3d5289",
          blueGrey: "#252b47",
          blueWhite: "#1f2f6d",
        },
        alert: {
          red: "#ED3232",
          green: "#34A853",
        },
      },
      boxShadow: {
        spreadShadow:
          "0px -10px 30px -5px rgba(7, 89, 133, 0.3), 0px 10px 30px -5px rgba(7, 89, 133, 0.3)",
      },
    },
  },
  plugins: [],
};
