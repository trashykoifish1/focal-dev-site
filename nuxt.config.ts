// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/typography"), require("daisyui")],
    },
  },
  plugins: ["~/plugins/heroicons.js"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Slab&family=Caveat&display=swap",
        },
      ],
    },
  },
});
