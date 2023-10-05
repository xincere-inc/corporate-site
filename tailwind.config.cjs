/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      md: "768px",
    },
    fontSize: {
      h2: "2.5rem",
      eh2: "2rem",
      h3: "1.5rem",
      "5xl": ['3rem', 1],
      "xl": ['1.25rem', '1.75rem'],
    },
    colors: {
      white: "#FFFFFF",
      gray: "#F0F0F0",
      primary: "#518C3C",
      black: "#000000",
      primary10: "#F1F6F0"
    },
    fontFamily: {},
    extend: {
      width: {
        desktop: "1160px",
      },
    },
    variants: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
