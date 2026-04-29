/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fibGold: "#F5C84B",
        fibGoldDeep: "#D8A72F",
      },
      boxShadow: {
        fibGlow: "0 0 0 1px rgba(245, 200, 75, 0.18), 0 0 32px rgba(245, 200, 75, 0.12)",
      },
    },
  },
  plugins: [],
};

