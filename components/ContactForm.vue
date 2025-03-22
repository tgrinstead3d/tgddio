<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const openForm = () => {
    isOpen.value = true;
};

const closeForm = () => {
    isOpen.value = false;
};

defineExpose({ openForm });
</script>

<template>
    <div>
        <!-- Hidden form for Netlify to detect at build time -->
        <form name="contact" netlify hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>

        <!-- Modal Background -->
        <div v-if="isOpen" class="fixed inset-0 bg-slate-100 bg-opacity-80 z-50 flex items-center justify-center p-4"
            @click="closeForm">

            <!-- Modal Content -->
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full" @click.stop>

                <!-- Modal Header -->
                <div class="border-b px-6 py-4 flex justify-between items-center">
                    <h3 class="text-xl font-semibold text-slate-800">Contact Us</h3>
                    <button @click="closeForm" class="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Modal Body -->
                <div class="px-6 py-4">
                    <form name="contact" method="POST" data-netlify="true">
                        <!-- Netlify Form Name -->
                        <input type="hidden" name="form-name" value="contact" />

                        <!-- Name Field -->
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                            <input id="name" name="name" type="text" required
                                class="border rounded w-full py-2 px-3 bg-white" />
                        </div>

                        <!-- Email Field -->
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                            <input id="email" name="email" type="email" required
                                class="border rounded w-full py-2 px-3 bg-white" />
                        </div>

                        <!-- Message Field -->
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" required
                                class="border rounded w-full py-2 px-3 bg-white"></textarea>
                        </div>

                        <!-- Form Controls -->
                        <div class="flex justify-end">
                            <button type="button" @click="closeForm"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                Cancel
                            </button>
                            <button type="submit"
                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>