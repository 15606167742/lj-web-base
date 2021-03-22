<template>
	<el-input
		:value="value"
		:name="name"
		type="text"
		:placeholder="placeholder"
		:minlength="minlength"
		:maxlength="maxlength"
		:show-word-limit="showWordLimit"
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
	name: 'ComText',
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
		minlength: {
			type: Number
		},
		maxlength: {
			type: Number
		},
		showWordLimit: {
			type: Boolean,
			default: false
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
