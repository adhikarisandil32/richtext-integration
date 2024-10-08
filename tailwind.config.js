/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "360px",
        xl: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
}
