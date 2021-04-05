<template>
	<el-input
		:value="value"
		type="text"
		:placeholder="placeholder || label"
		:minlength="minlength"
		:maxlength="maxlength"
		:show-word-limit="showWordLimit"
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
	name: 'ComText',
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
			default: false
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
