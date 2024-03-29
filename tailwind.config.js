/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b192f",
        secondary: "#64ffda",
        dark: "#8892b0",
        lighter: "#a8b2d1",
        light: "#cbd6f3"
      },
      fontFamily: {
        Typewriter1: ["Typewriter-Thin"],
        Typewriter2: ["Typewriter-Bold"],
      },
      margin: {
        100: "24rem",
        2.5: "0.625rem",
      },
      spacing: {
        7.5: "1.8rem",
        18: "4.5rem",
        17: "4.3rem",
        100: "72rem",
        68: "17rem",
      },
      width: {
        94: "23rem",
        92: "21.7rem",
      },
      height: {
        105: "52rem",
        88: "20.5rem",
      },
    },
  },
  plugins: [],
}
