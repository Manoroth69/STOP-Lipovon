import {defineConfig} from 'tailwindcss';
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths based on your setup
  ],
  theme: {
    
      colors: {
        lipovon: {
          blue: "#CADBFF",
          darkBlue: "#1F1C5C",
          red: "#FC440F",
          lightRed: "#FFD1D1",
          violet: "#4B00D1",
          darkViolet: "#2E004E",
          aqua: "#D6F6F6",
        },
      },
      fontFamily: {
        headline: ['"Inter"', "sans-serif"], // or whatever you're using
      },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // no default themes, we use our own brand style
  },
};