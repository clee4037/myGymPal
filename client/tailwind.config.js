/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        torq: "#008993",
        bg: "#f2f2f7",
        t3: "#7a7f88",
      },
    },
  },
  plugins: [require("daisyui")],
};
