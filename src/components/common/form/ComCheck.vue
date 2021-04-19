<template>
	<el-checkbox
		:value="value"
		:true-label="trueLabel"
		:false-label="falseLabel"
		border
		:size="size"
		:textColor="textColor"
		:fill="fill"
		@input="$emit('input', $event)"
		v-if="type === 'border'"
	>
		<template #default>
			<slot name="default"></slot>
		</template>
	</el-checkbox>
	<el-checkbox
		:value="value"
		:true-label="trueLabel"
		:false-label="falseLabel"
		:size="size"
		:textColor="textColor"
		:fill="fill"
		@input="$emit('input', $event)"
		v-else
	>
		<template #default>
			<slot name="default"></slot>
		</template>
	</el-checkbox>
</template>

<script>
export default {
	name: 'ComCheck',
	props: {
		value: {
			type: [String, Number, Boolean]
		},
		trueLabel: {
			type: [String, Number],
			default: 1
		},
		falseLabel: {
			type: [String, Number],
			default: 0
		},
		type: {
			type: String,
			validator: function(value) {
				return ['border', 'button'].indexOf(value) !== -1;
			}
		},
		size: {
			type: String,
			validator: function(value) {
				return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1;
			}
		},
		textColor: {
			type: String
		},
		fill: {
			type: String
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
