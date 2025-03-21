<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
        title: 'Web Design',
        description: 'Stunning, responsive websites that reflect your brand identity and engage your audience.',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 2,
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Web Development',
        description: 'Custom web applications and dynamic websites built with modern frameworks and best practices.',
        color: 'bg-green-50 text-green-600'
    },
    {
        id: 3,
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        title: 'Mobile Optimization',
        description: 'Ensuring your digital presence works flawlessly across all devices and screen sizes.',
        color: 'bg-purple-50 text-purple-600'
    },
    {
        id: 4,
        icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
        title: 'Cloud Hosting',
        description: 'Reliable, secure, and scalable hosting solutions for your website or application.',
        color: 'bg-amber-50 text-amber-600'
    },
    {
        id: 5,
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
        title: 'SEO Optimization',
        description: 'Improving your visibility online to drive more organic traffic to your website.',
        color: 'bg-red-50 text-red-600'
    },
    {
        id: 6,
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        title: 'Performance Tuning',
        description: 'Optimizing your website for speed, efficiency, and the best possible user experience.',
        color: 'bg-teal-50 text-teal-600'
    }
]);
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-semibold text-slate-800 mb-3">Our Services</h2>
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        Comprehensive web design and development solutions tailored to your unique needs
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="service in services" :key="service.id"
                        class="rounded-lg p-6 shadow-md bg-white transition-all duration-300 hover:shadow-lg">
                        <div class="mb-4">
                            <div :class="service.color" class="rounded-full w-12 h-12 flex items-center justify-center">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="service.icon"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold mb-2 text-slate-800">{{ service.title }}</h3>
                        <p class="text-slate-600 mb-4">{{ service.description }}</p>
                    </div>
                </div>

                <div class="flex justify-center mt-10">
                    <NuxtLink to="/services/"
                        class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
                        View All Services
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>