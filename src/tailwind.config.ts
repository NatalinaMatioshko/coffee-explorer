import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cloud-dancer": "#F7F5F2",
        "coffee-dark": "#4f2d20",
        "coffee-light": "#6B4423",
        "coffee-medium": "#8B5A3C",
        "coffee-beige": "#D4C5B9",
        "coffee-cream": "#f9f3e9",
      },
    },
  },
  plugins: [],
} satisfies Config;
