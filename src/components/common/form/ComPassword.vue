<template>
	<el-input
		:value="value"
		:name="name"
		type="text"
		:placeholder="placeholder"
		show-password
		:clearable="clearable"
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
		name: {
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
		}
	},
	data() {
		return {
			
		};
	},
	methods: {}
};
</script>

<style></style>
