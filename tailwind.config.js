/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tsx}",
    "./Components/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      // yo website ko lagi use gareko fonts
      fontFamily: {
        title: ["Satisfy"],
      },
    },
  },
  plugins: [],
};
