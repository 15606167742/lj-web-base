<template>
	<el-input
		:value="value"
		type="text"
		:placeholder="placeholder || label"
		show-password
		:clearable="clearable"
		:size="size"
		@input="$emit('input', $event)"
	>
		<template #prefix>
			<slot name="prefix"></slot>
		</template>
		<template #suffix>
			<slot name="suffix"></slot>
		</template>
		<template #prepend>
			<slot name="prepend"></slot>
		</template>
		<template #append>
			<slot name="append"></slot>
		</template>
	</el-input>
</template>

<script>
export default {
	name: 'ComPassword',
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
		clearable: {
			type: Boolean,
			default: true
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
