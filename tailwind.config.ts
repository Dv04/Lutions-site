import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Indigo-600
          hover: '#4338ca', // Indigo-700
        },
        secondary: '#9333ea', // Purple-600 from gradient
        neutral: colors.slate,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-pulse": "gradient-pulse 10s ease-in-out infinite",
      },
      keyframes: {
        "gradient-pulse": {
          "0%, 100%": {
            "background-position": "0% 50%",
            opacity: "0.6",
          },
          "50%": {
            "background-position": "100% 50%",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
