// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },
  site: {
    name: 'Kastor AI | Instant, Authentic Social Media & Blog Content',
    domain: process.env.NUXT_SITE_URL,
    sitemap: {
      hostname: process.env.NUXT_SITE_URL,
    },
  },
  routeRules: {
    '/': { 
      prerender: true,
      sitemap: {
        lastmod: '2025-01-16',
        changefreq: 'weekly',
        priority: 1
      }
    }
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
})

