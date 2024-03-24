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
        secondary: "#6ba2aa",
        dark: "#515971",
        lighter: "#ccd8f2",
        light: "#cbd6f3"

      }
    },
  },
  plugins: [],
}
