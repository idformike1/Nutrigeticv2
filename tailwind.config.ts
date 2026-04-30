import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f6f2",
        backgroundAlt: "#f0eee6",
        foreground: "#111111",
        primary: "#1f3d2b",
        muted: "#5f655f",
        border: "#d8d4c9",
        surface: "#fffdf9"
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        h1: ["2.75rem", { lineHeight: "1.06", letterSpacing: "-0.035em" }],
        h2: ["2rem", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        h3: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        body: ["1.0625rem", { lineHeight: "1.65" }]
      },
      maxWidth: {
        container: "1280px"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      },
      boxShadow: {
        soft: "0 12px 32px rgba(17, 17, 17, 0.04)",
        card: "0 18px 42px rgba(17, 17, 17, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
