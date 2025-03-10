<script setup>
let quote = "Get A Quote!"
</script>

<template>
    <div class="flex flex-col items-center justify-center relative max-w-[1920px] mx-auto">
        <img src="./../assets/tree.png" class="opacity-[35%] ml-[30%] mr-[75%] max-h-[600px]" alt="tree" />
        <div class="flex flex-col items-center fixed z-0">
            <h1 class="shadow-white drop-shadow-lg md:text-4xl text-2xl text-black font-light items-center mx-auto text-center">Breathe Life
                into Your Digital Presence: </h1>
            <h1 class="shadow-white drop-shadow-lg md:text-3xl text-lg text-black font-thin items-center mx-auto">We Help Your
                Brand Thrive <span class="font-medium text-green-600">Online.</span></h1>
            <Button :what="quote" class="mt-10 hover:btn-success" />
        </div>
    </div>
</template>