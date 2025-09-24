import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    enviroment: "PRODUCTION",
    public: {
      baseUrl: "",
      appUrl: "",
      version: "0.0.0",
    },
  },

  app: {
    head: {
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge"},
        { name: "viewport", content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"},
      ],
      htmlAttrs: {
        lang: "en"
      },
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [[
    '@pinia/nuxt',
    {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
    },
  ], [
    '@nuxtjs/eslint-module', 
    {
      failOnError: true,
      formatter: 'unix',
    }
  ], "@nuxt/eslint"],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  compatibilityDate: "2024-11-01",
})