import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0039AC",
        primaryb: "#EDF0F5",
        primaryc: "#F5F7FA",
        secondary: "#50B7FC",
        graybody: "#39405C",
        graycard: "#D1DBE0",
        bluetext: "#141B2A",
        bluebtn: "#0567F0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
      letterSpacing: {
        "custom-wide": "0.25px",
      },
      lineHeight: {
        lnH: "52px",
        lnL: "25px",
      },
      gridTemplateRows: {
        "2": "repeat(2, 1fr)", // Adds `grid-rows-2`
      },
    },
  },
  plugins: [],
} satisfies Config;
