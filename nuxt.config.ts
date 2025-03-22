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
    // Enable build time chunk splitting
    buildAssetsDir: '/_nuxt/',
  },

  // Image optimization
  image: {
    quality: 70, // Reduced quality for smaller file sizes
    format: ['webp'], // Only use webp for smaller files
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // More aggressive optimization
    providers: {
      netlify: {
        options: {
          // Add netlify image optimization options
          format: 'webp',
          quality: 70
        }
      }
    }
  },

  // Build optimization and Netlify specific settings
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    // Use regular netlify preset instead of edge for smaller bundles
    preset: 'netlify',
    // Add route rules for caching static assets
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public,max-age=31536000,immutable' } },
      '/assets/**': { headers: { 'cache-control': 'public,max-age=31536000,immutable' } },
    },
    // Optimize server bundle size
    inlineDynamicImports: true,
  },

  // Component lazy loading
  components: {
    global: false,
    dirs: [
      '~/components'
    ]
  },

  // Reduce bundle size with production optimizations
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor chunks
            'vue-vendor': ['vue', 'vue-router'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  },

  experimental: {
    treeshakeClientOnly: true,
    payloadExtraction: true,
    renderJsonPayloads: true,
  }
})