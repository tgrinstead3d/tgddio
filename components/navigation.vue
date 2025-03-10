<script setup>
</script>

<template>
  <div class="mx-auto bg-slate-50 flex space-between items-center">
    <div class="ml-0 mr-auto flex row items-center">
      <NuxtLink to="/" class="pl-4 py-2 max-w-[160px]"><img alt="TGDesign.io logo" src="/assets/tgdio.webp"></NuxtLink>
    </div>
    <div class="text-slate-950 text-lg justify-end p-2 ml-auto mr-2 md:flex hidden">
      <NuxtLink to="/about/" class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">About</NuxtLink>
      <NuxtLink to="/work/" class="text-slate-950 p-2 hover:underline hover:text-green-600">Services</NuxtLink>
      <NuxtLink to="/pricing/" class="text-slate-950 p-2 hover:underline cursor-pointer hover:text-green-600">Pricing</NuxtLink>
      <span class="p-2 hover:underline cursor-pointer hover:text-green-600">Contact</span>
      <div
          class="ml-1 my-0 mr-0 flex items-center justify-center bg-[#2bbf60] rounded-lg max-w-fit cursor-pointer hover:bg-green-600 transition-all duration-500">
        <span class="px-1 m-2 text-[#fff] font-bold">Get A Quote</span>
      </div>
    </div>
     <button class="btn btn-square btn-ghost md:hidden block mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-5 w-5 stroke-current inline-block"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
</template>
