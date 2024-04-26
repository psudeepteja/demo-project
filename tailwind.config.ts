import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        "0.4px":"0.4px",
        "12":"12px",
      },
      colors: {
        orange:{
          "100":"#EB5017",
          "200":"#D24C21"
        },
        gray:{
          "100":"#F8F8F8"
        }
      },
      fontFamily:{
        "manrope": "Manrope"
      },
      height: {
        '63px': '63px',
        "68px":"68px",
        "464px":"464px",
        "59":"236px"
      },
      lineHeight:{
        "34.15px":"34.5px",
        "6.5":"26px",
        "5.5":"22px",
        "21.86px":"21.86px",
        "20px":"20px"
      },
      padding: {
        "34px": "34px",
      },
      fontSize: {
        '25px': '25px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
