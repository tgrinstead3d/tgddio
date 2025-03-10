<script setup>
	const props = defineProps({
	what: String,
	color: String
	});
</script>
<template>
	<div>
		<div class="btn text-white border-none ">
			{{ props.what }}
			{{ props.color }}
		</div>
	</div>
</template>
