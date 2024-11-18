/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0D",
        secondary: "#181819",
        content: "#C2C2C2",
        card: "#121212",
        icon: "#19191A",
        proj: "#131F2B",
      },
      fontFamily: {
        'rubik-distressed': ['Rubik Distressed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

