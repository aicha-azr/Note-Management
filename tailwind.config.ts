import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "burgendy": "#540b0f",
        "pastell-red":"#9c2a2b",
        "gold":"#de9d3e",
        "blanc-casse":"#fff1ae",
        "pastell-blue":"#345c67"
      },
    },
  },
  plugins: [],
};
export default config;
