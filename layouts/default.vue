<script setup>
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="bg-white">
    <Wip />
    <Navigation />
    <NuxtPage id="slot" />
    <Footer />
  </div>
</template>
