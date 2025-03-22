<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const formSubmitted = ref(false);

// Form state
const name = ref('');
const email = ref('');
const message = ref('');

// Reset the form
const resetForm = () => {
    name.value = '';
    email.value = '';
    message.value = '';
    formSubmitted.value = false;
};

// Open the contact form modal
const openForm = () => {
    isOpen.value = true;
    resetForm();
};

// Close the contact form modal
const closeForm = () => {
    isOpen.value = false;
};

// Handle form submission
const handleSubmit = (event) => {
    // Show success message
    formSubmitted.value = true;

    // Allow the form to be submitted naturally
    setTimeout(() => {
        // Close the form after showing success message
        setTimeout(() => {
            closeForm();
        }, 3000);
    }, 100);
};

// Expose the openForm method to be called from parent components
defineExpose({ openForm });
</script>

<template>
    <div>
        <!-- Hidden form for Netlify to detect at build time -->
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>

        <!-- Modal Background -->
        <div v-if="isOpen" class="fixed inset-0 bg-slate-100 bg-opacity-80 z-50 flex items-center justify-center p-4"
            @click="closeForm">

            <!-- Modal Content -->
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" @click.stop>

                <!-- Modal Header -->
                <div class="border-b px-6 py-4 flex justify-between items-center">
                    <h3 class="text-xl font-semibold text-slate-800">Contact Us</h3>
                    <button @click="closeForm" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Modal Body -->
                <div class="px-6 py-4">
                    <!-- Success Message -->
                    <div v-if="formSubmitted" class="text-center p-4">
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                            <p>Thank you for your message! We'll get back to you soon.</p>
                        </div>
                    </div>

                    <!-- Form -->
                    <form v-else name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
                        @submit="handleSubmit">
                        <!-- Netlify Form Requirements -->
                        <input type="hidden" name="form-name" value="contact" />
                        <div hidden>
                            <input name="bot-field" />
                        </div>

                        <!-- Name Field -->
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                                Name <span class="text-red-500">*</span>
                            </label>
                            <input id="name" v-model="name" name="name" type="text" required
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <!-- Email Field -->
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                                Email <span class="text-red-500">*</span>
                            </label>
                            <input id="email" v-model="email" name="email" type="email" required
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <!-- Message Field -->
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">
                                Message <span class="text-red-500">*</span>
                            </label>
                            <textarea id="message" v-model="message" name="message" rows="4" required
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-white leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>

                        <!-- Form Controls -->
                        <div class="flex justify-end">
                            <button type="button" @click="closeForm"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 transition-colors">
                                Cancel
                            </button>
                            <button type="submit"
                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>