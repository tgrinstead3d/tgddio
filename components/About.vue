<script setup>
// About component for TG Design & Development, LLC
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-semibold mb-6 text-center text-slate-800">About TG Design & Development, LLC
                </h2>

                <div class="flex flex-col md:flex-row items-center gap-10">
                    <div class="w-full md:w-1/3">
                        <div class="rounded-lg overflow-hidden shadow-md">
                            <img src="/assets/tgdio.png" alt="TG Design & Development, LLC Logo" loading="lazy"
                                class="w-full h-auto" />
                        </div>
                    </div>

                    <div class="w-full md:w-2/3">
                        <p class="text-lg text-slate-700 mb-4 leading-relaxed">
                            I'm Tyler Grinstead, the founder of TG Design & Development, LLC. As a digital brand
                            consultant, I'm more than just a web designer — I provide comprehensive solutions to help
                            small businesses establish and strengthen their entire online presence.
                        </p>

                        <p class="text-lg text-slate-700 mb-4 leading-relaxed">
                            With my technical expertise and creative marketing strategy, I build cohesive brand
                            experiences across all digital touchpoints — from your website and SEO to social media,
                            content creation, and email marketing.
                        </p>

                        <p class="text-lg text-slate-700 leading-relaxed">
                            Whether you're launching a new business, refreshing your digital presence, or looking to
                            expand your online reach, I approach each project holistically — crafting tailored digital
                            solutions that help your business thrive in today's connected world.
                        </p>

                        <div class="mt-6">
                            <NuxtLink to="/about/">
                                <Button what="Learn More About My Approach" class="bg-green-600 hover:bg-green-700" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>