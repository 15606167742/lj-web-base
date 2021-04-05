<template>
	<el-input
		:value="value"
		type="textarea"
		:placeholder="placeholder || label"
		:minlength="minlength"
		:maxlength="maxlength"
		:show-word-limit="showWordLimit"
		:clearable="clearable"
		autosize
		@input="$emit('input', $event)"
	/>
</template>

<script>
export default {
	name: 'ComTextarea',
	props: {
		value: {
			type: String
		},
		label: {
			type: String
		},
		placeholder: {
			type: String
		},
		minlength: {
			type: Number
		},
		maxlength: {
			type: Number
		},
		showWordLimit: {
			type: Boolean,
			default: true
		},
		clearable: {
			type: Boolean,
			default: true
		},
	},
	data() {
		return {
			
		};
	},
	methods: {}
};
</script>

<style></style>
