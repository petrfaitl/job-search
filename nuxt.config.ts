// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  alias:
    {
      "~~": "/<rootDir>",
      "@@": "/<rootDir>",
      "~": "/<rootDir>",
      "@": "/<rootDir>",
      "assets": "/<rootDir>/assets",
      "public": "/<rootDir>/public",
      "images": "/public/images/",
    },

})
