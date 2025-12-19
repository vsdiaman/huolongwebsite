/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandCream: "#FFFBDE",
        brandMagenta: "#F267FF",
        brandBlack: "#000000",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0 #000000",
      },
    },
  },
  plugins: [],
};
