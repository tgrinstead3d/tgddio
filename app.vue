<script setup>
import { onMounted } from 'vue'

// Add performance monitoring during development
if (process.dev) {
  const startTime = Date.now()
  onMounted(() => {
    console.log(`Page fully loaded in ${Date.now() - startTime}ms`)
  })
}
</script>

<template>
  <div class="bg-white">
    <NuxtLayout />
  </div>
</template>
