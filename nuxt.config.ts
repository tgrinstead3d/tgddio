// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Set SSR mode
  ssr: true,

  compatibilityDate: '2024-07-12',
  modules: ["@nuxt/content", "@nuxt/image"],

  // Environment variables
  runtimeConfig: {
    // Private keys that are exposed to the server only
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    // Public keys that are exposed to the client
    public: {
      // publicKey: 'publicValue'
    }
  },

  // Performance optimization
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    },
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Build optimization and Netlify specific settings
  nitro: {
    compressPublicAssets: true,
    minify: true,
    preset: 'netlify-edge',
  },

  // Component lazy loading
  components: {
    global: false,
    dirs: [
      '~/components'
    ]
  },

  experimental: {
    treeshakeClientOnly: true
  }
})