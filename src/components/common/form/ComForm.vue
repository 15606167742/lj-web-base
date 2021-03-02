<script>
export default {
	name: 'ComForm',
	render(createElement) {
		return createElement('h1', this.value);
	},
	props: {
		value: {
			type: String,
			required: true
		}
	}
};
</script>

<style></style>
