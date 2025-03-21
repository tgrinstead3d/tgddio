<script setup>
import { computed } from 'vue';

const props = defineProps({
	what: String,
	color: {
		type: String,
		default: ''
	}
});

const emit = defineEmits(['quote-click']);

const buttonText = computed(() => props.what || '');
const buttonClass = computed(() => `btn text-white border-none ${props.color || ''}`);

const handleClick = () => {
	// Check if this is a quote button
	if (buttonText.value.toLowerCase().includes('quote')) {
		emit('quote-click');
	}
};
</script>

<template>
	<button :class="buttonClass" @click="handleClick">
		{{ buttonText }}
	</button>
</template>
