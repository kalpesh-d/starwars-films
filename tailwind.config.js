/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#070a13",
        light: "#f1f5f9",
        slate400: "#94a3b8",
        slate600: "#475569",
        slate800: "#1e293b",
        rose: "#e11d48",
        indigo: "#4f46e5",
      },
    },
  },
  plugins: [],
};
