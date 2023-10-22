/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      md: "768px",
    },
    fontSize: {
      h1: "2.5rem",
      h2: "2.0rem",
      eh2: "2rem",
      h3: "1.5rem",
      "5xl": ["3rem", 1],
      xl: ["1.25rem", "1.75rem"],
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
    },
    colors: {
      white: "#FFFFFF",
      gray: "#F0F0F0",
      primary: "#518C3C",
      black: "#000000",
      body: "#333333",
      description: "#949495",
      alert: "#FF0000",
      "border/light": "#D6D6D6",
      "gray/90": "#1E2D39",
      blue: "#0774D8",
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
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
};
