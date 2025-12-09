import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#2b1f18",
        cream: "#efe2c9",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        "playfair-display": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
