<script setup>
import { onMounted, ref } from 'vue'
import ContactForm from './ContactForm.vue'

const props = defineProps({
    quote: {
        type: String,
        default: "Get A Quote!"
    }
})

// Use dynamic import for the image
const backgroundImageUrl = ref('')
const contactFormRef = ref(null)

onMounted(() => {
    // In Nuxt, we can use the /assets directory in the URL
    backgroundImageUrl.value = '/assets/tree.png'
})

const handleQuoteClick = () => {
    if (contactFormRef.value) {
        contactFormRef.value.openForm()
    }
}
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
            <span class="text-green-600 font-medium text-base sm:text-lg tracking-wider uppercase mb-2">Digital Brand
                Consultant</span>
            <h1
                class="shadow-white drop-shadow-lg text-2xl sm:text-3xl md:text-5xl text-black font-extrabold mb-4 sm:mb-6 text-center leading-tight">
                Transform Your <span class="text-green-600">Digital Presence</span>
            </h1>
            <h2
                class="shadow-white drop-shadow-lg text-base sm:text-xl md:text-2xl text-black mb-8 sm:mb-10 text-center max-w-xl leading-relaxed">
                Websites that convert. Brands that connect. Marketing that delivers measurable results.
            </h2>

            <div class="flex flex-col sm:flex-row gap-4 items-center">
                <Button :what="props.quote" class="bg-green-600 hover:bg-green-700 transition-colors duration-300"
                    @quote-click="handleQuoteClick" />

                <NuxtLink to="/services/"
                    class="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
                    View Services
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </NuxtLink>
            </div>
        </div>

        <!-- Contact Form component -->
        <ContactForm ref="contactFormRef" />
    </div>
</template>