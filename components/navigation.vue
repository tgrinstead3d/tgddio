<script setup>
import { ref } from 'vue'
import ContactForm from './ContactForm.vue'

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current inline-block"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current inline-block"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`

const isMenuOpen = ref(false)
const contactFormRef = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close menu when clicking a link (mobile)
const closeMenu = () => {
  isMenuOpen.value = false
}

const openQuoteForm = () => {
  closeMenu() // Close mobile menu if open
  // Open contact form
  if (contactFormRef.value) {
    contactFormRef.value.openForm()
  }
}
</script>

<template>
  <div class="relative bg-slate-50 w-full">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <NuxtLink to="/" class="py-4"><img loading="lazy" width="160" height="40"
              alt="TG Design & Development, LLC logo" src="/assets/tgdio.webp"></NuxtLink>
        </div>
        <div class="text-slate-950 text-lg justify-end p-2 md:flex hidden">
          <NuxtLink :key="'about'" to="/about/"
            class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">About</NuxtLink>
          <NuxtLink :key="'services'" to="/services/"
            class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">Services</NuxtLink>
         
          <div @click="openQuoteForm"
            class="ml-1 flex items-center justify-center bg-[#2bbf60] rounded-lg max-w-fit cursor-pointer hover:bg-green-600 transition-all duration-500">
            <span class="px-1 m-2 text-[#fff] font-bold">Get A Quote</span>
          </div>
        </div>
        <button @click="toggleMenu" class="btn btn-square btn-ghost md:hidden block" aria-label="Menu">
          <span v-html="isMenuOpen ? closeIcon : menuIcon"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <div v-if="isMenuOpen"
      class="absolute w-full bg-slate-50 shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out"
      :class="{ 'opacity-100 translate-y-0': isMenuOpen, 'opacity-0 -translate-y-10': !isMenuOpen }">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto flex flex-col py-2">
          <NuxtLink @click="closeMenu" :key="'about-mobile'" to="/about/"
            class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">About
          </NuxtLink>
          <NuxtLink @click="closeMenu" :key="'services-mobile'" to="/services/"
            class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">Services
          </NuxtLink>
          <a @click="closeMenu" href="#contact"
            class="text-slate-950 p-3 border-b border-slate-200 hover:bg-slate-100 hover:text-green-600">Contact</a>
          <div class="p-3">
            <div @click="openQuoteForm"
              class="bg-[#2bbf60] rounded-lg p-2 text-center cursor-pointer hover:bg-green-600 transition-all duration-500">
              <span class="text-white font-bold">Get A Quote</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Component -->
    <ContactForm ref="contactFormRef" />
  </div>
</template>
