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
        primaryb: "#EDF0F5",
        primaryc: "#F5F7FA",
        secondary: "#50B7FC",
        graybody: "#39405C",
        graycard: "#D1DBE0",
        bluetext: "#141B2A",
        bluebtn: "#0567F0",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) -1.28%, rgba(0, 0, 0, 0.8) -1.27%, rgba(3, 0, 36, 0.7) 46.83%, rgba(3, 0, 36, 0) 100%)',
        "blue-gradient": "bg-gradient-to-r from-[#0039AC] to-[#056BF0] "
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'franklin': ['Libre Franklin', 'sans-serif'] 
      },
      letterSpacing: {
        'custom-wide': '0.25px', // Add this to your letter-spacing configuration
      },
      lineHeight: {
        lnH: "52px",
        lnL: "25px"
      }
    },
  },
  plugins: [],
} satisfies Config;
