export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  plugins: [
    '@/plugins/antd'
  ],

  css: [
    '@/assets/css/main.css'
  ],

  compatibilityDate: '2024-10-24'
})