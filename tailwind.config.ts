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
        accent: "#E6FF4B",
        dark: "#1E1C1C",
        light: "#F4F4F4",
        gray: "#2A2A2A",
      },
      fontFamily: {
        heading: ["Satoshi", "var(--font-syne)", "sans-serif"],
        body: ["General Sans", "var(--font-dm-sans)", "sans-serif"],
      },
      transitionTimingFunction: {
        wemian: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
