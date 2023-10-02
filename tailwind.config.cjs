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
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
    },
    colors: {
      white: "#FFFFFF",
      gray: "#F0F0F0",
      primary: "#518C3C",
      black: "#000000",
      body: "#333333",
      Description: "#949495",
      "gray/90": "#1E2D39",
    },
    fontFamily: {
      gothic: ["YuGothic"],
      sans: ["Noto Sans"],
    },
    extend: {
      width: {
        desktop: "1160px",
      },
      boxShadow: {
        "custom-lg": "0px 2px 8px 0px rgba(0, 0, 0, 0.25)",
      },
    },
    variants: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
