<script setup>
import { computed } from 'vue';

const props = defineProps({
	what: String,
	color: {
		type: String,
		default: ''
	}
});

const buttonText = computed(() => props.what || '');
const buttonClass = computed(() => `btn text-white border-none ${props.color || ''}`);
</script>

<template>
	<button :class="buttonClass">
		{{ buttonText }}
	</button>
</template>
