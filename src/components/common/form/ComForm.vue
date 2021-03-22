<script>
	export default {
		name: 'ComForm',
		render(createElement) {
			this.fillModel();
			console.log(this.$slots.default)
			let elFormItems = createFormItems(this.$slots.default);

			function createFormItems(VNodes) {
				return VNodes.map(item => {
					//todo子节点
					let childNodeArr;
					if (item.componentOptions && item.componentOptions.tag === 'com-template') {
						if (item.componentOptions.children) {
							childNodeArr = createChildFormItems(item.componentOptions.children);
						} else {
							childNodeArr = [];
						}
					} else {
						childNodeArr = [item];
					}
					return createElement('el-form-item', {
						props: {
							'label': (item.componentOptions && item.componentOptions.propsData && item
								.componentOptions.propsData.label) || (item.data && item.data.attrs &&
								item.data.attrs.label),
						},
					}, childNodeArr);
				})
			}

			function createChildFormItems(VNodes) {
				return VNodes.map(item => {
					return item
				})
			}
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
						this.fillObj(this.model, item.data.model.expression);
					} else if (item.data && item.data.directives && item.data.directives[0] && item.data
						.directives[0].expression && item.data.directives[0].expression.indexOf(this.modelName) ===
						0) {
						this.fillObj(this.model, item.data.directives[0].expression);
					}
				})
			},
			fillObj(obj, attrStr) {
				let attrArr;
				if (Array.isArray(attrStr)) {
					attrArr = JSON.parse(JSON.stringify(attrStr));
				} else {
					attrArr = attrStr.split('.');
				}
				attrArr.shift();
				attrArr.forEach(attr => {
					if (obj[attr] === undefined) {
						this.$set(obj, attr, null);
					}
					obj = obj[attr];
				})
			}
		}
	};
</script>

<style></style>
