// netlify.js - Used for Netlify deployments
export default {
  // Netlify-specific settings for Nuxt
  nitro: {
    preset: 'netlify',
  },
  // Disable experimental features for Netlify
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
  }
}; 