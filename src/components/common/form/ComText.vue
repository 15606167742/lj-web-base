<template>
	<el-input :value="value" type="text" :placeholder="placeholder" :minlength="minlength" :maxlength="maxlength"
		:show-word-limit="showWordLimit" :clearable="clearable" @input="$emit('input', $event)">
		<template #suffix>
			<slot name="suffix"></slot>
		</template>
		<template #prefix>
			<slot name="prefix"></slot>
		</template>
	</el-input>
</template>

<script>
	export default {
		name: 'ComText',
		props: {
			value: {
				type: String,
				required: true
			},
			placeholder: {
				type: String,
			},
			minlength: {
				type: Number,
			},
			maxlength: {
				type: Number,
			},
			showWordLimit: {
				type: Boolean,
				default: false
			},
			clearable: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				icontest: 'iconcloud'
			};
		},
		methods: {

		}
	};
</script>

<style></style>
