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
    },
    colors: {
      white: "#FFFFFF",
      gray: "#F0F0F0",
      primary: "#518C3C",
      black: "#000000",
      "gray-333": "#333333",
      "gray-949495": "#949495",
      "gray-CDD0D3": "#CDD0D3",
      "gray-505C65": "#505C65",
      "gray-1E2D39": "#1E2D39",
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
