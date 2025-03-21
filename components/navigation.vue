<script setup>
import { ref } from 'vue'

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current inline-block"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current inline-block"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close menu when clicking a link (mobile)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="relative">
    <div class="mx-auto bg-slate-50 flex space-between items-center">
      <div class="ml-0 mr-auto flex row items-center">
        <NuxtLink to="/" class="pl-4 py-2 max-w-[160px]"><img loading="lazy" width="160" height="40"
            alt="TGDesign.io logo" src="/assets/tgdio.webp"></NuxtLink>
      </div>
      <div class="text-slate-950 text-lg justify-end p-2 ml-auto mr-2 md:flex hidden">
        <NuxtLink :key="'about'" to="/about/"
          class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">About</NuxtLink>
        <NuxtLink :key="'work'" to="/work/" class="text-slate-950 p-2 hover:underline hover:text-green-600">Services
        </NuxtLink>
        <NuxtLink :key="'pricing'" to="/pricing/"
          class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">Pricing</NuxtLink>
        <span class="p-2 hover:underline cursor-pointer hover:text-green-600">Contact</span>
        <div
          class="ml-1 my-0 mr-0 flex items-center justify-center bg-[#2bbf60] rounded-lg max-w-fit cursor-pointer hover:bg-green-600 transition-all duration-500">
          <span class="px-1 m-2 text-[#fff] font-bold">Get A Quote</span>
        </div>
      </div>
      <button @click="toggleMenu" class="btn btn-square btn-ghost md:hidden block mr-4" aria-label="Menu">
        <span v-html="isMenuOpen ? closeIcon : menuIcon"></span>
      </button>
    </div>

    <!-- Mobile menu dropdown -->
    <div v-if="isMenuOpen"
      class="absolute w-full bg-slate-50 shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out"
      :class="{ 'opacity-100 translate-y-0': isMenuOpen, 'opacity-0 -translate-y-10': !isMenuOpen }">
      <div class="flex flex-col py-2">
        <NuxtLink @click="closeMenu" :key="'about-mobile'" to="/about/"
          class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">About</NuxtLink>
        <NuxtLink @click="closeMenu" :key="'work-mobile'" to="/work/"
          class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">Services
        </NuxtLink>
        <NuxtLink @click="closeMenu" :key="'pricing-mobile'" to="/pricing/"
          class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">Pricing
        </NuxtLink>
        <a @click="closeMenu" href="#contact"
          class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">Contact</a>
        <div class="p-3">
          <div
            class="bg-[#2bbf60] rounded-lg p-2 text-center cursor-pointer hover:bg-green-600 transition-all duration-500">
            <span class="text-white font-bold">Get A Quote</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
