export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    // baseURL: '/test-zeus',
    baseURL: '/',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Zeus',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
        { rel: 'icon', type: 'image/pn', sizes: '192x192"  href="/android-icon-192x192.png'},
        { rel: 'icon', type: 'image/pn', sizes: '32x32" href="/favicon-32x32.png'},
        { rel: 'icon', type: 'image/pn', sizes: '96x96" href="/favicon-96x96.png'},
        { rel: 'icon', type: 'image/pn', sizes: '16x16" href="/favicon-16x16.png'},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      MAILCHIMP_KEY: process.env.MAILCHIMP_KEY,
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/_grid.scss',
    '@/assets/scss/_base.scss',
    '@/assets/scss/_transitions.scss',
    '@/assets/scss/_text.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";
          @import "@/assets/scss/_mixins.scss";`,
        },
      },
    },
  },
  modules: ['nuxt-security'],
  security: {
    headers: {
      crossOriginEmbedderPolicy: {
        value: 'unsafe-none',
        route: '/**'
      },
      contentSecurityPolicy: {
        value: {
          'base-uri': ["'self'"],
          'font-src': ["'self'", 'https:', 'data:'],
          'img-src': ["'self'", 'https:', 'data:'],
          'object-src': ["'none'"],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'"],
          'upgrade-insecure-requests': true,
        },
        route: '/**'
      },
    },
    hidePoweredBy: false
  },
  build: {
    transpile: ['gsap'],
  }
})