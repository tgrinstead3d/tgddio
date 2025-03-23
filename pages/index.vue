<script setup>
useHead({
  title: 'Tyler Grinstead | Web Developer & Designer',
  meta: [
    {
      name: 'description',
      content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
    },
    // Open Graph / Facebook
    { property: 'og:title', content: 'Tyler Grinstead | Web Developer & Designer' },
    {
      property: 'og:description',
      content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
    },
    // Twitter
    { name: 'twitter:title', content: 'Tyler Grinstead | Web Developer & Designer' },
    {
      name: 'twitter:description',
      content: 'Tyler Grinstead is a web developer and designer specializing in creating beautiful, functional, and user-friendly websites and applications.'
    }
  ]
})

definePageMeta({
  layout: 'default',
})
</script>
<template>
  <Hero quote="Get A Quote!" />
  <Projects />
  <Services />
  <About />
</template>
