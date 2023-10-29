/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // Tailwind docs goes over this way of extending the default theme https://tailwindcss.com/docs/theme#extending-the-default-theme
      colors: {
        // theme is the prefix for all the colors we use in our app, it can be called anything you want
        theme: {
          bkg: "hsl(var(--theme-bkg) / <alpha-value>)",
          elements: "hsl(var(--theme-elements) / <alpha-value>)",
          text: "hsl(var(--theme-text) / <alpha-value>)",
          input: "hsl(var(--theme-input) / <alpha-value>)",
        },
      },
      fontSize: {
        homepage: ".875rem",
        base: "1rem",
      },
      fontFamily: {
        primary: ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
      screens: {
        desktop: "1024px",
        // >= @media (min-width: 1024px) { ... }
      },
      gridTemplateColumns: {
        main: "repeat(auto-fit, minmax(14rem, 1fr))",
        details:
          "minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr)",
        auto: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      gridTemplateRows: {
        // This allows our grid container to be full height of the body instead of stopping where the content stops
        main: "min-content 1fr",
      },

      screens: {
        desktop: "800px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [({ addVariant }) => addVariant("children", "&>*")],
};
