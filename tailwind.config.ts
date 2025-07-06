import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          // Switched to Teal for a fresh, modern tech look
          DEFAULT: colors.teal[600],
          hover: colors.teal[700],
        },
        secondary: colors.purple[500], // Kept a purple accent from the gradient
        neutral: colors.zinc, // Switched to Zinc for a slightly warmer, professional gray palette
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-pulse": "gradient-pulse 10s ease-in-out infinite",
        "typing-blink": "typing-blink 0.7s infinite",
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
        "typing-blink": {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "currentColor" },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
