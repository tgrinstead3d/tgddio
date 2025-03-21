<script setup>
definePageMeta({
  layout: 'default',
});

import { ref } from 'vue';
import ContactForm from '~/components/ContactForm.vue';

const services = ref([
  {
    title: "Web Design & Development",
    description: "Custom, responsive websites that not only look beautiful but are strategically designed to convert visitors into customers."
  },
  {
    title: "Brand & Visual Identity",
    description: "Cohesive brand development including logo design, color palettes, typography and complete visual systems."
  },
  {
    title: "SEO Optimization",
    description: "Data-driven search strategies to improve rankings and drive qualified traffic to your website."
  },
  {
    title: "Content Creation",
    description: "Compelling blogs, articles, and marketing materials that establish authority and connect with your audience."
  }
]);

const values = ref([
  {
    title: "Client Partnership",
    description: "I believe in long-term relationships, not one-off transactions. Your success is my success.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
  },
  {
    title: "Results-Focused",
    description: "Every design decision and strategy recommendation is aimed at achieving measurable business outcomes.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
  },
  {
    title: "Holistic Approach",
    description: "I look at the complete digital ecosystem, ensuring all elements work together harmoniously.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
  },
  {
    title: "Continuous Growth",
    description: "The digital landscape evolves rapidly. I stay at the forefront of trends and best practices.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>`
  }
]);

const contactFormRef = ref(null);

const openContactForm = () => {
  if (contactFormRef.value) {
    contactFormRef.value.openForm();
  }
};
</script>

<template>
  <div class="mx-auto">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2">
              <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">Building Digital Success</h1>
              <p class="text-xl text-slate-600 mb-6 leading-relaxed">
                I'm Tyler Grinstead, founder of TG Design & Development, LLC. I partner with small businesses to create
                compelling digital experiences that drive measurable results.
              </p>
              <div class="flex flex-wrap gap-4">
                <button @click="openContactForm"
                  class="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 inline-flex items-center">
                  Let's Work Together
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </button>
                <a href="#my-story"
                  class="px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-green-600 hover:text-green-600 transition-colors duration-300">
                  My Story
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="rounded-lg overflow-hidden shadow-lg bg-white p-6">
                <img src="/assets/tgdio.svg" alt="TG Design & Development, LLC Logo" class="w-full h-auto mb-6" />
                <div class="flex items-center justify-center space-x-6">
                  <a v-for="(platform, index) in ['facebook', 'instagram']" :key="index"
                    :href="`https://${platform}.com/${platform === 'facebook' ? 'tylergrinsteaddesign' : 'txgrinstead'}`"
                    target="_blank" rel="noopener noreferrer"
                    class="text-slate-500 hover:text-green-600 transition-colors duration-300">
                    <span class="sr-only">{{ platform }}</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path v-if="platform === 'facebook'"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      <path v-else-if="platform === 'instagram'"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Story Section -->
    <section id="my-story" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-800 mb-3">My Story</h2>
            <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              The journey from web designer to comprehensive digital brand consultant
            </p>
          </div>

          <div class="bg-gray-50 rounded-lg shadow-md p-8 mb-12">
            <div class="prose prose-lg max-w-none text-slate-700">
              <p>
                My path to founding TG Design & Development, LLC began with a passion for creating websites that not
                only looked great but actually helped businesses achieve their goals. After years of working with small
                businesses, I noticed a pattern: companies would get a beautiful website, but struggle with the many
                other aspects of digital marketing needed to make that website successful.
              </p>

              <p class="mt-4">
                I realized that businesses needed more than just a web designer—they needed a partner who could provide
                strategic guidance across all digital channels. Someone who understood how websites, SEO, content,
                social media, and brand identity work together as an ecosystem rather than isolated elements.
              </p>

              <p class="mt-4">
                Today, I work with small business owners to create cohesive digital experiences. My approach combines
                technical expertise with marketing strategy, ensuring that every aspect of your online presence is
                working together to build your brand, attract your ideal customers, and grow your business.
              </p>

              <p class="mt-4">
                What sets me apart is my commitment to truly understanding your business goals, target audience, and
                unique value proposition. I don't just build websites or create content—I develop comprehensive digital
                brand strategies tailored specifically to help you thrive in your market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-800 mb-3">What I Do</h2>
            <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive digital brand solutions to elevate your business
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div v-for="(service, index) in services" :key="index"
              class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-3 text-slate-800">{{ service.title }}</h3>
              <p class="text-slate-600">{{ service.description }}</p>
            </div>
          </div>

          <div class="text-center mt-8">
            <NuxtLink to="/services/"
              class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
              View All Services
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-800 mb-3">My Values</h2>
            <div class="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p class="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide my approach to every project
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(value, index) in values" :key="index" class="bg-gray-50 rounded-lg p-6 flex items-start">
              <div class="text-green-600 mr-4 mt-1" v-html="value.icon"></div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-slate-800">{{ value.title }}</h3>
                <p class="text-slate-600">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-16 bg-green-700 text-white relative">
      <!-- Decorative top edge -->
      <div class="absolute top-0 left-0 right-0 h-3 bg-green-600"></div>

      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p class="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Let's discuss how I can help your business thrive online with a custom digital strategy.
          </p>
          <button @click="openContactForm"
            class="inline-flex items-center px-8 py-4 bg-white text-green-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            Get in Touch
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Form component -->
    <ContactForm ref="contactFormRef" />
  </div>
</template>
