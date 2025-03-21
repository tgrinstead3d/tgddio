<script setup>
// About component for TGDesign
</script>

<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-semibold mb-6 text-center text-slate-800">About TGDesign</h2>

                <div class="flex flex-col md:flex-row items-center gap-10">
                    <div class="w-full md:w-1/3">
                        <div class="rounded-lg overflow-hidden shadow-md">
                            <img src="/assets/tgdio.webp" alt="TGDesign Logo" loading="lazy" class="w-full h-auto" />
                        </div>
                    </div>

                    <div class="w-full md:w-2/3">
                        <p class="text-lg text-slate-700 mb-4 leading-relaxed">
                            At TGDesign, we believe great digital experiences start with understanding your unique
                            vision.
                            We're not just developers and designers—we're partners in bringing your brand's story to
                            life online.
                        </p>

                        <p class="text-lg text-slate-700 mb-4 leading-relaxed">
                            Founded by Tyler Grinstead, our boutique web design and development studio combines
                            technical expertise
                            with creative innovation to craft websites that are as functional as they are beautiful.
                        </p>

                        <p class="text-lg text-slate-700 leading-relaxed">
                            Whether you're launching a new brand, refreshing your digital presence, or seeking to
                            optimize your
                            current site, we approach each project with the same dedication: creating tailored digital
                            solutions
                            that help your business thrive online.
                        </p>

                        <div class="mt-6">
                            <Button what="Learn More About Us" class="bg-green-600 hover:bg-green-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>