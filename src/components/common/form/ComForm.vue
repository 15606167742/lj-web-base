<script>
	export default {
		name: 'ComForm',
		render(createElement) {
			this.fillModel()
			let elFormItems = this.$slots.default.map(item => {
				if (item.componentOptions && item.componentOptions.tag === 'com-template') {
					return createElement('el-form-item', item.componentOptions.children);
				} else {
					return createElement('el-form-item', {
						props: {
							'label': item.data && item.data.attrs && item.data.attrs.label ? item.data
								.attrs.label : ''
						},
					}, [item]);
				}
			})
			return createElement('el-form', {
				props: {
					'model': this.model,
					'label-width': this.labelWidth ? this.labelWidth : 'auto',
					'label-position': this.labelPosition,
					'size': this.size,
				},
			}, elFormItems);
		},
		props: {
			model: {
				type: Object,
				required: true
			},
			modelName: {
				type: String,
				required: true
			},
			labelWidth: {
				type: String,
				defalut: 'auto'
			},
			labelPosition: {
				type: String,
				validator: function(value) {
					return ['right', 'left', 'top'].indexOf(value) !== -1
				}
			},
			size: {
				type: String,
				validator: function(value) {
					return ['medium', 'small', 'mini'].indexOf(value) !== -1
				}
			},
		},
		data() {
			return {

			}
		},
		methods: {
			fillModel() {
				this.$slots.default.forEach(item => {
					if (item.data && item.data.model && item.data.model.value === undefined &&
						item.data.model.expression && item.data.model.expression.indexOf(this.modelName) === 0) {
						console.log(item.data.model.expression.indexOf(this.modelName))
						// this.fillObj(this.model, expression_array)
					}
				})
			},
			fillObj(obj, str) {
				this.$set(obj, 'test', 666)
			}
		}
	};
</script>

<style></style>
