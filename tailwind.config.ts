import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        charcoal: "#131417",
        iron: "#1C1D22",
        steel: "#2A2C33",
        bone: "#F3F1EC",
        smoke: "#9A9AA3",
        crimson: "#FFFFFF",
        ember: "#D4D4D8",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(90deg, #FFFFFF 0%, #8B8D97 100%)",
        "flame-gradient-v": "linear-gradient(180deg, #FFFFFF 0%, #8B8D97 100%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(255,255,255,0.18)",
        card: "0 10px 40px -10px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
