<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const submitted = ref(false);
const failed = ref(false);
const isSubmitting = ref(false);

// Form data as refs
const nameInput = ref('');
const emailInput = ref('');
const messageInput = ref('');

const openForm = () => {
    isOpen.value = true;
    submitted.value = false;
    failed.value = false;
    isSubmitting.value = false;
    // Reset form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
};

const closeForm = () => {
    isOpen.value = false;
};

async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            })
        });

        if (response.ok) {
            submitted.value = true;
            failed.value = false;
            // Reset form
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            // Close the form after showing success message
            setTimeout(() => {
                closeForm();
            }, 3000);
        } else {
            const error = await response.text();
            console.error('Form submission failed:', error);
            failed.value = true;
            submitted.value = false;
        }
    } catch (error) {
        console.error('Form submission error:', error);
        failed.value = true;
        submitted.value = false;
    } finally {
        isSubmitting.value = false;
    }
}

defineExpose({ openForm });
</script>

<template>
    <div>
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
                    <!-- Success Message -->
                    <div v-if="submitted"
                        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <p>Thank you for your message! We'll get back to you soon.</p>
                    </div>

                    <!-- Error Message -->
                    <div v-if="failed" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        <p>There was a problem submitting your form. Please try again.</p>
                    </div>

                    <form v-if="!submitted" @submit="handleSubmit">
                        <!-- Name Field -->
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                            <input id="name" v-model="nameInput" type="text" required
                                class="border rounded w-full py-2 px-3 bg-white" />
                        </div>

                        <!-- Email Field -->
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                            <input id="email" v-model="emailInput" type="email" required
                                class="border rounded w-full py-2 px-3 bg-white" />
                        </div>

                        <!-- Message Field -->
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" v-model="messageInput" rows="4" required
                                class="border rounded w-full py-2 px-3 bg-white"></textarea>
                        </div>

                        <!-- Form Controls -->
                        <div class="flex justify-end">
                            <button type="button" @click="closeForm"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                Cancel
                            </button>
                            <button type="submit" :disabled="isSubmitting"
                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                {{ isSubmitting ? 'Sending...' : 'Submit' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>