/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AC0A6D",
        cGray: "#15171A",
        cPink: "#CE2B7F",
      },
      height: {
        super: "30rem",
      },
    },
  },
  plugins: [],
};
