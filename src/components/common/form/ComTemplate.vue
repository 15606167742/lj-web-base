<script>
	export default {
		name: 'ComTemplate',
		render(createElement) {
			return createElement('template', this.$slots.default);
		},
		props:{
			label: {
				type: String
			},
		}
	};
</script>
