<template>
	<el-checkbox-group
		:value="value"
		:checkboxes="checkboxes"
		:value-key="valueKey"
		:show-key="showKey"
		:min="min"
		:max="max"
		:type="type"
		:size="size"
		:text-color="textColor"
		:fill="fill"
		@input="$emit('input', $event)"
	>
		<template v-if="type === 'button'">
			<el-checkbox-button :label="checkbox[valueKey]" :key="checkbox[valueKey]" v-for="checkbox in checkboxes">{{ checkbox[showKey] }}</el-checkbox-button>
		</template>
		<template v-else-if="type === 'border'">
			<el-checkbox :label="checkbox[valueKey]" border :key="checkbox[valueKey]" v-for="checkbox in checkboxes">{{ checkbox[showKey] }}</el-checkbox>
		</template>
		<template v-else>
			<el-checkbox :label="checkbox[valueKey]" :key="checkbox[valueKey]" v-for="checkbox in checkboxes">{{ checkbox[showKey] }}</el-checkbox>
		</template>
	</el-checkbox-group>
</template>

<script>
export default {
	name: 'ComCheckbox',
	props: {
		value: {
			type: Array,
			default: function() {
				return [];
			}
		},
		checkboxes: {
			type: Array,
			default: function() {
				return [];
			}
		},
		valueKey: {
			type: String,
			default: 'label'
		},
		showKey: {
			type: String,
			default: 'name'
		},
		min: {
			type: Number
		},
		max: {
			type: Number
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
