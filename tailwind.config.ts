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
        foreground: "#111111",
        primary: "#1f3d2b",
        muted: "#6b7280",
        border: "#d6d3d1"
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        h1: ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h2: ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        body: ["1.0625rem", { lineHeight: "1.7" }]
      },
      maxWidth: {
        container: "1280px"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      }
    }
  },
  plugins: []
};

export default config;
