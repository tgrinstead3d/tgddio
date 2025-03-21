<script setup>
const props = defineProps({
    quote: {
        type: String,
        default: "Get A Quote!"
    }
})
</script>

<template>
    <div class="flex flex-col items-center justify-center relative max-w-[1920px] mx-auto">
        <img src="./../assets/tree.png" loading="lazy" width="600" height="600"
            class="opacity-[35%] ml-[30%] mr-[75%] max-h-[600px]" alt="tree" />
        <div
            class="flex flex-col items-center absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1
                class="shadow-white drop-shadow-lg md:text-4xl text-2xl text-black font-light items-center mx-auto text-center">
                Breathe Life into Your Digital Presence: </h1>
            <h1 class="shadow-white drop-shadow-lg md:text-3xl text-lg text-black font-thin items-center mx-auto">We
                Help Your Brand Thrive <span class="font-medium text-green-600">Online.</span></h1>
            <Button :what="props.quote" class="mt-10 hover:btn-success" />
        </div>
    </div>
</template>