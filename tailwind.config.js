const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
          obereGrey: "#919191",
        },
        secondary: {
          darkGrey: "#2b2b2b",
          lightGrey: "#f7fafc",
          white: "#FDF7FF",
        },
        alert: {
          red: "#ED3232",
          green: "#34A853",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-img.jpg')",
        "custom-gradient1":
          "linear-gradient(rgba(0, 0, 0, 0) 5.59%, rgba(0, 0, 0, 0.15) 53.05%, rgba(0, 0, 0, 0) 79.73%)",
      },
    },
  },
  plugins: [],
};
