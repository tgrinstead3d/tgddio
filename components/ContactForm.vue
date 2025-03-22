<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);
const errorMessage = ref('');

const formData = ref({
    name: '',
    email: '',
    message: ''
});

const formErrors = ref({
    name: '',
    email: '',
    message: ''
});

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validateForm = () => {
    let isValid = true;
    formErrors.value = {
        name: '',
        email: '',
        message: ''
    };

    if (!formData.value.name.trim()) {
        formErrors.value.name = 'Name is required';
        isValid = false;
    }

    if (!formData.value.email.trim()) {
        formErrors.value.email = 'Email is required';
        isValid = false;
    } else if (!validateEmail(formData.value.email)) {
        formErrors.value.email = 'Please enter a valid email';
        isValid = false;
    }

    if (!formData.value.message.trim()) {
        formErrors.value.message = 'Message is required';
        isValid = false;
    }

    return isValid;
};

const openForm = () => {
    isOpen.value = true;
    // Reset form when opening
    formData.value = {
        name: '',
        email: '',
        message: ''
    };
    formErrors.value = {
        name: '',
        email: '',
        message: ''
    };
    submitSuccess.value = false;
    submitError.value = false;
    errorMessage.value = '';
};

const closeForm = () => {
    isOpen.value = false;
};

const handleSubmit = async () => {
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;
    submitError.value = false;
    errorMessage.value = '';

    try {
        // Send the form data to our API endpoint
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.value.name,
                email: formData.value.email,
                message: formData.value.message
            }),
        });

        const result = await response.json();

        if (result.success) {
            submitSuccess.value = true;

            // Reset form after successful submission
            setTimeout(() => {
                formData.value = {
                    name: '',
                    email: '',
                    message: ''
                };
                // Auto-close form after success message
                setTimeout(() => {
                    closeForm();
                    submitSuccess.value = false;
                }, 3000);
            }, 500);
        } else {
            submitError.value = true;
            errorMessage.value = result.message || 'There was an error sending your message. Please try again.';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        submitError.value = true;
        errorMessage.value = 'There was an error sending your message. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};

// Expose the openForm method to be called from parent components
defineExpose({ openForm });
</script>

<template>
    <div>
        <!-- Modal Background -->
        <div v-if="isOpen" class="fixed inset-0 bg-slate-100 bg-opacity-80 z-50 flex items-center justify-center p-4"
            @click="closeForm">

            <!-- Modal Content -->
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" @click.stop>

                <!-- Modal Header -->
                <div class="border-b px-6 py-4 flex justify-between items-center">
                    <h3 class="text-xl font-semibold text-slate-800">Get a Quote</h3>
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
                    <div v-if="submitSuccess"
                        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <p>Thank you for your message! We'll get back to you soon.</p>
                    </div>

                    <div v-if="submitError"
                        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        <p>{{ errorMessage }}</p>
                    </div>

                    <form @submit.prevent="handleSubmit" v-if="!submitSuccess" netlify>
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name <span
                                    class="text-red-500">*</span></label>
                            <input id="name" v-model="formData.name" type="text"
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                                :class="{ 'border-red-500': formErrors.name }" />
                            <p v-if="formErrors.name" class="text-red-500 text-xs mt-1">{{ formErrors.name }}</p>
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email <span
                                    class="text-red-500">*</span></label>
                            <input id="email" v-model="formData.email" type="email"
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                                :class="{ 'border-red-500': formErrors.email }" />
                            <p v-if="formErrors.email" class="text-red-500 text-xs mt-1">{{ formErrors.email }}</p>
                        </div>

                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message <span
                                    class="text-red-500">*</span></label>
                            <textarea id="message" v-model="formData.message" rows="4"
                                class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                                :class="{ 'border-red-500': formErrors.message }"></textarea>
                            <p v-if="formErrors.message" class="text-red-500 text-xs mt-1">{{ formErrors.message }}</p>
                        </div>

                        <div class="flex justify-end">
                            <button type="button" @click="closeForm"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 transition-colors">
                                Cancel
                            </button>
                            <button type="submit"
                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                                :disabled="isSubmitting">
                                <span v-if="isSubmitting">
                                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Sending...
                                </span>
                                <span v-else>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>