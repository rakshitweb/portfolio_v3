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
      width: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      fontSize: {
        base: ["1.6rem", "2.2rem"],
        sm: ["1.4rem", "2rem"],
      },
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        text: "rgb(var(--text))",
        ball: "rgba(var(--ball), <alpha-value>)",
      },
      backgroundColor: {
        background: "rgba(var(--background), <alpha-value>)",
        ball: "rgba(var(--ball), <alpha-value>)",
        card: "rgba(var(--card), <alpha-value>)",
      },
      boxShadow: {
        card: "0 0 1rem 0.15rem currentColor, inset 0 0 0.75rem 0.15rem currentColor",
      },
      boxShadowColor: {
        frost: "rgba(var(--shadow-frost), <alpha-value>)",
      },
      zIndex: {
        backdrop: "-1",
        content: "0",
        navbar: "1000",
        overlay: "1100",
        "mouse-pointer": "1250",
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
