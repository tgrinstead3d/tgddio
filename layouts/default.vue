<script setup>
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="bg-white">
    <Navigation />
    <NuxtPage id="slot" />
    <Footer />
  </div>
</template>
