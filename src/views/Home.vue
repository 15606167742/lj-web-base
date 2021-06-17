<template>
	<div class="home">
		<com-text ref="text" v-model="name"></com-text>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ComText from '@/components/common/form/ComText.vue';

	export default {
		name: 'Home',
		components: {
			ComText
		},
		data() {
			return {
				name: 'tom'
			};
		},
	}
</script>
