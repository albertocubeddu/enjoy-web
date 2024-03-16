import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //Surface
        "surface-primary": "#FFFFFF",
        "surface-primary-dark": "#090909",
        "surface-extra-light": "#FFFFFF",
        "surface-dark-extra-light": "#060606",
        "surface-light": "#FCFCFC",
        "surface-dark-light": "#0B0B0B",
        "surface-medium": "#F9F9F9",
        "surface-dark-medium": "#141414",
        "surdace-dark": "#FFFFFF",
        "surface-dark-dark": "#FFFFFF",
        //On
        "on-surface": "#000000",
        "on-surface-dark": "#FFFFFF",
        "on-light": "#A1A1A1",
        "on-dark-light": "#747474",
        "on-medium": "#747474",
        "on-dark-medium": "#A1A1A1",
        "on-dark": "#FFFFFF",
        "on-dark-dark": "#FFFFFF",
        //Outline
        "outline-medium": "#E5E5E5",
        "outline-medium-dark": "#3B3B3B",
        "outline-light": "#EEEEEE",
        "outline-light-dark": "#222222",
        //Primary
        "primary-primary": "#35B164",
        "primary-primary-dark": "#76FB92",
        "primary-light": "#EAFEEF",
        "primary-light-dark": "#183F37",
        "primary-medium": "#76FB92",
        "primary-medium-dark": "#397E53",
        "primary-dark": "#183F37",
        "primary-dark-dark": "#EAFEEF",
      },
    },
  },
  plugins: [],
};
export default config;
