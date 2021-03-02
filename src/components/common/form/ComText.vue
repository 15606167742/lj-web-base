<template>
	<el-input :value="value" type="text" placeholder="请输入内容" @input="$emit('input', $event)" />
</template>

<script>
export default {
	name: 'ComText',
	props: {
		value: {
      type: String,
      required: true
    }
	},
	data() {
		return {
			icontest: 'iconcloud'
		};
	},
	methods:{
		
	}
};
</script>

<style></style>
