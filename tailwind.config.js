/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
