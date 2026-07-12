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
        sunny: {
          DEFAULT: "#FFC94D",
          dark: "#E5A824",
          light: "#FFEBB0",
        },
        sky: {
          DEFAULT: "#5FB6E8",
          dark: "#3D93C6",
          light: "#C9E9FA",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "clay-lg": "16px 16px 32px #d6cdef, -16px -16px 32px #ffffff",
        "clay-md": "10px 10px 20px #d6cdef, -10px -10px 20px #ffffff",
        "clay-sm": "6px 6px 12px #d6cdef, -6px -6px 12px #ffffff",
        "clay-inset": "inset 6px 6px 12px #d6cdef, inset -6px -6px 12px #ffffff",
        "clay-coral": "10px 10px 22px #e3a186, -10px -10px 22px #ffe4d8",
        "clay-teal": "10px 10px 22px #299d92, -10px -10px 22px #d9fbf6",
        "clay-sunny": "10px 10px 22px #d1a338, -10px -10px 22px #fff6dc",
        "clay-sky": "10px 10px 22px #4b93c1, -10px -10px 22px #e3f4fd",
        "clay-grape": "10px 10px 22px #6f56bd, -10px -10px 22px #e6ddfb",
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
        clay: "2rem",
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
