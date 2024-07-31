<script setup>
</script>

<template>
  <div class="mx-auto bg-slate-50 flex space-between items-center">
    <div class="ml-0 mr-auto flex row items-center">
      <NuxtLink to="/" class="pl-4 py-2"><img alt="TGDesign.io logo" src="/assets/tgdio.webp"></NuxtLink>
    </div>
    <div class="text-slate-950 text-lg flex justify-end p-2 ml-auto mr-2">
      <NuxtLink to="/about/" class="text-slate-950 p-2 hover:underline cursor-pointer">About</NuxtLink>
      <NuxtLink to="/work/" class="text-slate-950 p-2 hover:underline ">Services</NuxtLink>
      <NuxtLink to="/pricing/" class="text-slate-950 p-2 hover:underline cursor-pointer">Pricing</NuxtLink>
      <span class="p-2 hover:underline cursor-pointer">Contact</span>
      <div
          class="ml-1 my-0 mr-0 flex items-center justify-center bg-[#2bbf60] rounded-lg max-w-fit cursor-pointer hover:bg-green-600 transition-all duration-500">
        <span class="px-1 m-2 text-[#fff] font-bold ">Get A Quote</span>
      </div>
    </div>
  </div>
  <div>
    <div class="bg-gray-900 h-[30px]">

    </div>
  </div>
</template>
