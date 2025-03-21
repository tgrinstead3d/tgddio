<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    quote: {
        type: String,
        default: "Get A Quote!"
    }
})

// Use dynamic import for the image
const backgroundImageUrl = ref('')

onMounted(() => {
    // In Nuxt, we can use the /assets directory in the URL
    backgroundImageUrl.value = '/assets/tree.png'
})
</script>

<template>
    <div class="relative py-20 sm:py-32 px-4 overflow-hidden max-w-[1920px] mx-auto min-h-[400px] sm:min-h-[500px]">
        <!-- Background image with lowest z-index -->
        <div class="absolute inset-0 z-0">
            <img src="./../assets/tree.png" loading="lazy" alt="tree"
                class="opacity-[0.35] absolute top-1/2 left-[35%] transform -translate-y-1/2 -translate-x-1/2 h-[500px] object-contain" />
        </div>

        <!-- Content with higher z-index -->
        <div class="relative z-20 flex flex-col items-center w-full max-w-2xl mx-auto">
            <h1
                class="shadow-white drop-shadow-lg text-2xl sm:text-3xl md:text-4xl text-black font-light mb-2 sm:mb-4 text-center">
                Breathe Life into Your Digital Presence
            </h1>
            <h2
                class="shadow-white drop-shadow-lg text-lg sm:text-xl md:text-2xl font-semibold text-black mb-8 sm:mb-10 text-center">
                We Help Your Brand Thrive
                <span class="font-medium text-green-600 inline sm:block mt-1">Online.</span>
            </h2>

            <Button :what="props.quote" class="mt-2 sm:mt-6 hover:btn-success" />
        </div>
    </div>
</template>