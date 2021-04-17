<template>
	<el-checkbox-group
		:value="value"
		:checkboxes="checkboxes"
		:min="min"
		:max="max"
		:type="type"
		:size="size"
		:textColor="textColor"
		:fill="fill"
		@input="$emit('input', $event)"
	>
		<template v-if="type==='button'">
			<el-checkbox-button :label="radio.label" :key="radio.label" v-for="radio in radios"></el-checkbox-button>
		</template>
		<template v-else-if="type==='border'">
			<el-checkbox :label="radio.label" border :key="radio.label" v-for="radio in radios"></el-checkbox>
		</template>
		<template v-else>
			<el-checkbox :label="radio.label" :key="radio.label" v-for="radio in radios"></el-checkbox>
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
				return []
			}
		},
		checkboxes: {
			type: Array,
			default: function() {
				return []
			}
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
		return {
			
		};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
	.el-radio{
		line-height: 40px;
	}
	.el-radio.is-bordered{
		line-height: 1;
	}
	.el-form-item--mini{
		.el-radio{
			line-height: 28px;
		}
		.el-radio--mini.is-bordered{
			line-height: 1;
		}
	}
	.el-form-item--small{
		.el-radio{
			line-height: 32px;
		}
		.el-radio--small.is-bordered{
			line-height: 1;
		}
	}
	.el-form-item--medium{
		.el-radio{
			line-height: 36px;
		}
		.el-radio--medium.is-bordered{
			line-height: 1;
		}
	}
</style>
