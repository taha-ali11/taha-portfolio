/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fredoka)"],
        sans: ["var(--font-outfit)"],
        mono: ["var(--font-jetbrains)"],
      },
      colors: {
        // base
        cream: "#F5F1FB",
        cloud: "#FBF7FF",
        ink: "#3B2E52",
        "clay-lilac": "#E9DFFC",

        // accents (+ dark shade for shadows / hover text)
        grape: { DEFAULT: "#8B5CF6", dark: "#6D3FE0" },
        coral: { DEFAULT: "#FF6B5B", dark: "#E24B3D" },
        sunny: { DEFAULT: "#FFC145", dark: "#E0A324" },
        sky: { DEFAULT: "#6C8CFF", dark: "#4A63E0" },
        teal: { DEFAULT: "#1E9E8C", dark: "#0F7A6C" },
        clayGreen: { DEFAULT: "#3DB670", dark: "#259456" },

        "mint-deep": "#D6F5E8",
        emerald: "#14804A",
      },
      borderRadius: {
        clay: "2rem",
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
      },
      boxShadow: {
        "clay-sm": "8px 8px 18px #D9CDEF, -8px -8px 18px #FFFFFF",
        "clay-md": "14px 14px 30px #D2C4EC, -14px -14px 30px #FFFFFF",
        "clay-lg": "22px 22px 46px #CBBBE8, -22px -22px 40px #FFFFFF",
        "clay-grape": "0 14px 30px -12px rgba(109, 63, 224, 0.45)",
        "clay-coral": "0 14px 30px -12px rgba(226, 75, 61, 0.4)",
        "clay-sunny": "0 14px 30px -12px rgba(224, 163, 36, 0.4)",
        "clay-sky": "0 14px 30px -12px rgba(74, 99, 224, 0.4)",
        "clay-teal": "0 14px 30px -12px rgba(15, 122, 108, 0.4)",
        "clay-green": "0 14px 30px -12px rgba(37, 148, 86, 0.4)",
        "clay-mint": "0 10px 24px -10px rgba(20, 128, 74, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};