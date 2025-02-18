import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      backgroundColor: {
        background: "rgba(var(--background), <alpha-value>)",
        ball: "rgba(var(--ball), <alpha-value>)",
      },
      zIndex: {
        backdrop: "-1",
      },
      animation: {
        "ball-move":
          "ball-move var(--animation-duration, 15s) linear infinite ",
        "ball-move-inverted":
          "ball-move-inverted var(--animation-duration, 15s) linear infinite",
      },
      keyframes: {
        "ball-move": {
          "0%": { top: "5%", left: "0%" },
          "20%": { top: "40%", left: "80%" },
          "40%": { top: "70%", left: "30%" },
          "60%": { top: "50%", left: "10%" },
          "80%": { top: "20%", left: "60%" },
          "100%": { top: "5%", left: "0%" },
        },
        "ball-move-inverted": {
          "0%": { top: "80%", left: "10%" },
          "20%": { top: "60%", left: "50%" },
          "40%": { top: "30%", left: "80%" },
          "60%": { top: "10%", left: "40%" },
          "80%": { top: "50%", left: "20%" },
          "100%": { top: "80%", left: "10%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
