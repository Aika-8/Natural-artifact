/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
    },
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "back-color": "rgba(29, 47, 48, 1)",
        "almost-black": "hsl(0, 0%, 8%)",
        "premium-green": "rgba(186, 226, 73, 1)",
      },
    },
  },
  plugins: [],
};
