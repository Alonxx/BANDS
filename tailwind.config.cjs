/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-web": "rgba(250, 205, 102, 1)",
        "dark-blue": "rgba(51, 55, 59, 0.37)",
      },
    },
  },
  plugins: [],
};
