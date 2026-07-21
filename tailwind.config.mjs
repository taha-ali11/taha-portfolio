/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloud: "#F4F1FC",
        clay: {
          base: "#EFEAFA",
          lilac: "#E4DBFB",
        },
        ink: "#3A3450",
        grape: {
          DEFAULT: "#8C6FE6",
          dark: "#6C4FD6",
          light: "#B7A4F2",
        },
        coral: {
          DEFAULT: "#FF8A65",
          dark: "#E3663F",
          light: "#FFD3C0",
        },
        teal: {
          DEFAULT: "#3ED5C9",
          dark: "#26A99E",
          light: "#BFF3EE",
        },
        // "Clay yellow" — from the fresh/gamified reference palette
        sunny: {
          DEFAULT: "#FCD34D",
          dark: "#E0B02E",
          light: "#FFF3C4",
        },
        sky: {
          DEFAULT: "#5FB6E8",
          dark: "#3D93C6",
          light: "#C9E9FA",
        },
        // "Clay green" + mint + deep emerald — from the fresh/gamified reference palette
        clayGreen: {
          DEFAULT: "#34D399",
          dark: "#1FAE7E",
          light: "#B9F5DE",
        },
        mint: {
          DEFAULT: "#ECFDF5",
          deep: "#D1FAE5",
        },
        emerald: {
          DEFAULT: "#064E3B",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "clay-lg": "18px 18px 40px #cdc2ec, -18px -18px 40px #ffffff, inset 3px 3px 7px rgba(255,255,255,0.8), inset -7px -7px 17px rgba(205,194,236,0.35)",
        "clay-md": "12px 12px 25px #cdc2ec, -12px -12px 25px #ffffff, inset 2px 2px 5px rgba(255,255,255,0.8), inset -5px -5px 13px rgba(205,194,236,0.35)",
        "clay-sm": "7px 7px 13px #cdc2ec, -7px -7px 13px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.85), inset -3px -3px 8px rgba(205,194,236,0.3)",
        "clay-inset": "inset 7px 7px 13px #cdc2ec, inset -7px -7px 13px #ffffff",
        "clay-coral": "10px 10px 22px #e3a186, -10px -10px 22px #ffe4d8, inset 3px 3px 7px rgba(255,255,255,0.65), inset -5px -5px 13px rgba(227,161,134,0.3)",
        "clay-teal": "10px 10px 22px #299d92, -10px -10px 22px #d9fbf6, inset 3px 3px 7px rgba(255,255,255,0.65), inset -5px -5px 13px rgba(41,157,146,0.25)",
        "clay-sunny": "10px 10px 22px #dcb43a, -10px -10px 22px #fff3c4, inset 3px 3px 7px rgba(255,255,255,0.7), inset -5px -5px 13px rgba(220,180,58,0.25)",
        "clay-sky": "10px 10px 22px #4b93c1, -10px -10px 22px #e3f4fd, inset 3px 3px 7px rgba(255,255,255,0.7), inset -5px -5px 13px rgba(75,147,193,0.25)",
        "clay-grape": "10px 10px 22px #6f56bd, -10px -10px 22px #e6ddfb, inset 3px 3px 7px rgba(255,255,255,0.65), inset -5px -5px 13px rgba(111,86,189,0.25)",
        "clay-green": "10px 10px 22px #1c9974, -10px -10px 22px #d7fbee, inset 3px 3px 7px rgba(255,255,255,0.7), inset -5px -5px 13px rgba(28,153,116,0.25)",
        "clay-mint": "10px 10px 22px #bfeed6, -10px -10px 22px #ffffff, inset 3px 3px 7px rgba(255,255,255,0.8), inset -5px -5px 13px rgba(191,238,214,0.35)",
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
        clay: "2.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
