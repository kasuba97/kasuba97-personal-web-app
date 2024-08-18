import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        btn: "#361b3d",
        highlight: "#9333ea",
      },
      borderColor: { border: "#9333ea" },
      textColor: {
        linkColor: "#8030e2",
      },
    },
  },
  plugins: [],
};
export default config;
