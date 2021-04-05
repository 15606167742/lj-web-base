<template>
	<el-radio-group
		:value="value"
		:size="size"
		@input="$emit('input', $event)"
	>
		
	</el-radio-group>
</template>

<script>
export default {
	name: 'ComText',
	props: {
		value: {
			type: String
		},
		size: {
			type: String,
			validator: function(value) {
				return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1;
			}
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
