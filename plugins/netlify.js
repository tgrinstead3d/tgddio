// plugins/netlify.js
export default defineNuxtPlugin(() => {
  console.log('Netlify plugin loaded');
  
  // This plugin can be used to apply Netlify-specific configurations
  // or handle environment variables for the Netlify environment
  
  return {
    provide: {
      netlifyEnv: process.env.NETLIFY || false
    }
  }
}); 