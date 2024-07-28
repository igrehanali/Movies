import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-Light": ["Nsans Light"],
        "nsans-Medium": ["Nsans Medium"],
        "nsans-Bold": ["Nsans Bold"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
