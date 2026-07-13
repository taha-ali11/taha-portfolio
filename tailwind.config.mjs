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
        "clay-lg": "22px 22px 48px #cdc2ec, -22px -22px 48px #ffffff",
        "clay-md": "14px 14px 30px #cdc2ec, -14px -14px 30px #ffffff",
        "clay-sm": "8px 8px 16px #cdc2ec, -8px -8px 16px #ffffff",
        "clay-inset": "inset 8px 8px 16px #cdc2ec, inset -8px -8px 16px #ffffff",
        "clay-coral": "12px 12px 26px #e3a186, -12px -12px 26px #ffe4d8",
        "clay-teal": "12px 12px 26px #299d92, -12px -12px 26px #d9fbf6",
        "clay-sunny": "12px 12px 26px #dcb43a, -12px -12px 26px #fff3c4",
        "clay-sky": "12px 12px 26px #4b93c1, -12px -12px 26px #e3f4fd",
        "clay-grape": "12px 12px 26px #6f56bd, -12px -12px 26px #e6ddfb",
        "clay-green": "12px 12px 26px #1c9974, -12px -12px 26px #d7fbee",
        "clay-mint": "12px 12px 26px #bfeed6, -12px -12px 26px #ffffff",
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
        clay: "2.25rem",
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
