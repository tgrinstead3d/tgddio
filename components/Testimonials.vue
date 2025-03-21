<script setup>
import { ref } from 'vue';

const testimonials = ref([
    {
        id: 1,
        quote: "TGDesign helped us completely transform our online presence. Their attention to detail and creative approach brought our vision to life.",
        name: "Sarah Johnson",
        company: "Bright Solutions LLC"
    },
    {
        id: 2,
        quote: "Working with Tyler was an absolute pleasure. He understood our needs perfectly and delivered a website that exceeded our expectations.",
        name: "Michael Rodriguez",
        company: "Elite Marketing Group"
    },
    {
        id: 3,
        quote: "Our e-commerce sales increased by 40% after our website redesign. The user experience is seamless and our customers love it!",
        name: "Jennifer Chen",
        company: "Artisan Crafts Co."
    },
    {
        id: 4,
        quote: "The team at TGDesign provided exceptional service from start to finish. They were responsive, professional, and delivered on time.",
        name: "David Wilson",
        company: "Pinnacle Real Estate"
    }
]);
</script>

<template>
    <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-3xl font-semibold text-center mb-10 text-slate-800">What Our Clients Say</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="testimonial in testimonials" :key="testimonial.id"
                        class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div class="mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.588.303-.95.75-1.758 1.342-2.43-.34-.562-.73-.97-1.184-1.235-.43-.244-.93-.34-1.48-.276-.44.058-.86.27-1.275.64-.41.368-.75.883-.976 1.553.157.453.332.91.52 1.378.19.47.375.908.55 1.313-.182.243-.35.533-.506.87-.156.334-.296.645-.42.93-.123.285-.234.538-.33.76.106.107.168.227.187.36.053.344.266.614.64.81.373.196.706.228.997.094.29-.134.45-.375.48-.72.336-.106.63-.223.885-.347.254-.125.55-.313.88-.563.36.438.587.89.684 1.36.97.47.13.886.13 1.246 0 .656-.31 1.093-.93 1.313-.62.22-1.218.132-1.79-.263-.574-.395-.922-.945-1.045-1.652-.86-.042-.25-.076-.24-.104.008-.028-.034-.056-.125-.083-.09-.028-.23-.052-.41-.074-.18-.02-.36-.03-.53-.03-.17 0-.31.01-.42.034-.11.022-.19.054-.24.094-.06.04-.09.093-.09.157 0 .435.12.847.35 1.234.23.387.55.73.94 1.03.39.3.85.54 1.36.72.51.18 1.07.27 1.67.27.61 0 1.19-.09 1.73-.28.55-.19 1.03-.45 1.43-.79.4-.34.72-.75.96-1.23.24-.48.36-1.01.36-1.58zm9.676 0c0-.88-.23-1.618-.69-2.217-.326-.41-.77-.682-1.327-.81-.55-.13-1.07-.14-1.54-.03-.16-.95.1-1.626.41-2.588.3-.95.75-1.757 1.342-2.43-.34-.56-.73-.97-1.184-1.233-.43-.245-.93-.34-1.48-.277-.44.058-.86.27-1.277.64-.42.368-.75.883-.976 1.553.157.453.332.91.52 1.378.19.47.375.908.55 1.313-.182.243-.35.533-.506.87-.157.334-.297.645-.42.93-.124.286-.235.538-.33.76.106.107.168.227.187.36.053.344.266.614.64.81.373.196.707.228.998.094.29-.134.45-.375.48-.72.336-.106.63-.223.886-.347.254-.125.55-.313.88-.563.36.438.587.89.683 1.36.96.47.13.886.13 1.246 0 .656-.31 1.093-.93 1.313-.62.22-1.22.132-1.79-.263-.574-.395-.923-.945-1.046-1.652-.086-.042-.25-.076-.24-.104.008-.028-.034-.056-.125-.083-.09-.028-.23-.052-.41-.074-.18-.02-.36-.03-.53-.03-.17 0-.31.01-.42.034-.11.022-.19.054-.24.094-.06.04-.09.093-.09.157 0 .435.12.847.35 1.234.23.387.55.73.94 1.03.39.3.85.54 1.36.72.51.18 1.07.27 1.67.27.61 0 1.19-.09 1.73-.28.55-.19 1.03-.45 1.43-.79.4-.34.72-.75.96-1.23.24-.48.36-1.01.36-1.58z" />
                            </svg>
                        </div>
                        <p class="text-gray-700 italic mb-4 min-h-[100px]">{{ testimonial.quote }}</p>
                        <div class="mt-4 border-t pt-4">
                            <p class="font-semibold text-slate-900">{{ testimonial.name }}</p>
                            <p class="text-sm text-slate-600">{{ testimonial.company }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>