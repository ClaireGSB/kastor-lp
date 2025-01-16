// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  site: {
    name: process.env.NUXT_SITE_NAME,
    domain: process.env.NUXT_SITE_URL,
    sitemap: {
      hostname: process.env.NUXT_SITE_URL,
    },
  },
  app: {
    baseURL: '/kastor-lp/',
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  ssr: true,
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  experimental: {
    inlineRouteRules: true
  },
})

