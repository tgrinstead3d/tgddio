// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-12',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-schema-org'
  ],

  // Environment variables
  runtimeConfig: {
    // Private keys that are exposed to the server only
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    // Public keys that are exposed to the client
    public: {
      siteUrl: 'https://tgdesign.io'
    }
  },

  // Performance optimization
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Tyler Grinstead | Web Developer & Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tyler Grinstead | Web Developer & Designer' },
        {
          property: 'og:description',
          content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
        },
        { property: 'og:image', content: '/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tyler Grinstead | Web Developer & Designer' },
        {
          name: 'twitter:description',
          content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
        },
        { name: 'twitter:image', content: '/og-image.jpg' },
        // Additional SEO tags
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://tgdesign.io' }
      ]
    },
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Sitemap configuration
  sitemap: {
    siteUrl: 'https://tgdesign.io'
  },

  // Schema.org configuration
  schemaOrg: {
    host: 'https://tgdesign.io'
  },

  // Build optimization
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // Component lazy loading
  components: {
    global: false,
    dirs: [
      '~/components'
    ]
  },

  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true
  }
})