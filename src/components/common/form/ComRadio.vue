<template>
	<el-radio-group
		:value="value"
		:radios="radios"
		:value-key="valueKey"
		:show-key="showKey"
		:type="type"
		:size="size"
		:text-color="textColor"
		:fill="fill"
		@input="$emit('input', $event)"
	>
		<template v-if="type==='button'">
			<el-radio-button :label="radio[valueKey]" :key="radio[valueKey]" v-for="radio in radios">{{radio[showKey]}}</el-radio-button>
		</template>
		<template v-else-if="type==='border'">
			<el-radio :label="radio[valueKey]" border :key="radio[valueKey]" v-for="radio in radios">{{radio[showKey]}}</el-radio>
		</template>
		<template v-else>
			<el-radio :label="radio[valueKey]" :key="radio[valueKey]" v-for="radio in radios">{{radio[showKey]}}</el-radio>
		</template>
	</el-radio-group>
</template>

<script>
export default {
	name: 'ComRadio',
	props: {
		value: {
			type: [String, Number, Boolean]
		},
		radios: {
			type: Array,
			default: function() {
				return []
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
