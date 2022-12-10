export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
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
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: 'http://zeus.local/wp-json/wp/v2'
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
  build: {
    transpile: ['gsap'],
  }
})
