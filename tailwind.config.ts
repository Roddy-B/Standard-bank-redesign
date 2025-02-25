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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0039AC",
        secondary: "#50B7FC",
        graybody: "#39405C",

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
      },
      letterSpacing: {
        'custom-wide': '0.25px', // Add this to your letter-spacing configuration
      }
    },
  },
  plugins: [],
} satisfies Config;
