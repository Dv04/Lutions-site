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
          // Professional blue for primary actions
          DEFAULT: colors.blue[700],
          hover: colors.blue[800],
          dark: colors.blue[400],
          'dark-hover': colors.blue[300],
        },
        secondary: {
          DEFAULT: colors.blue[400],
          dark: colors.blue[600],
        },
        neutral: {
          50: '#fff', // White
          100: colors.gray[100],
          200: colors.gray[200],
          400: colors.gray[400],
          600: colors.gray[600],
          700: colors.gray[700],
          800: colors.gray[800],
          900: '#000', // Black
          dark: colors.gray[900],
        },
        // For backgrounds and cards
        background: {
          DEFAULT: '#fff',
          dark: '#101624', // deep blue-black for dark mode
        },
        card: {
          DEFAULT: '#fff',
          dark: '#181e2a', // card bg for dark mode
        },
        border: {
          DEFAULT: colors.gray[200],
          dark: colors.gray[800],
        },
        text: {
          DEFAULT: colors.gray[900],
          dark: colors.gray[100],
        },
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
