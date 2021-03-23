<script>
export default {
	name: 'ComForm',
	render(createElement) {
		let $this = this;
		console.log(this.$slots.default);
		let elFormItems = createFormItems(this.$slots.default);
		//遍历生成一层子节点
		function createFormItems(VNodes) {
			return VNodes.map(VNode => {
				$this.fillModel(VNode);
				//生成子节点数组
				let childNodeArr;
				if (VNode.componentOptions && VNode.componentOptions.tag === 'com-template') {
					if (VNode.componentOptions.children) {
						childNodeArr = createChildFormItems(VNode.componentOptions.children);
					} else {
						childNodeArr = [];
					}
				} else {
					childNodeArr = [VNode];
				}
				return createElement(
					'el-form-item',
					{
						props: {
							prop: $this.getModelProp(VNode),
							label: $this.getComProp(VNode, 'label'),
							size: $this.getComProp(VNode, 'size')
						}
					},
					childNodeArr
				);
			});
		}
		//遍历生成二层及以后子节点
		function createChildFormItems(VNodes) {
			return VNodes.map(VNode => {
				$this.fillModel(VNode);
				//生成子节点数组
				let childNodeArr;
				if (VNode.componentOptions && VNode.componentOptions.tag === 'com-template') {
					if (VNode.componentOptions.children) {
						childNodeArr = createChildFormItems(VNode.componentOptions.children);
					} else {
						childNodeArr = [];
					}
				} else if ((VNode.data && VNode.data.model) || (VNode.data && VNode.data.directives && $this.isHasVmodel(VNode.data.directives))) {
					childNodeArr = [VNode];
				}
				if (childNodeArr) {
					return createElement(
						'el-form-item',
						{
							props: {
								label: $this.getComProp(VNode, 'label'),
								size: $this.getComProp(VNode, 'size')
							}
						},
						childNodeArr
					);
				} else {
					return VNode;
				}
			});
		}

		return createElement(
			'el-form',
			{
				props: {
					model: this.model,
					'label-width': this.labelWidth ? this.labelWidth : 'auto',
					'label-position': this.labelPosition,
					size: this.size
				},
				ref: 'comform',
			},
			elFormItems
		);
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
				return ['right', 'left', 'top'].indexOf(value) !== -1;
			}
		},
		size: {
			type: String,
			validator: function(value) {
				return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1;
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		//完善model
		fillModel(VNode) {
			if (VNode.data && VNode.data.model && VNode.data.model.value === undefined && VNode.data.model.expression && VNode.data.model.expression.indexOf(this.modelName) === 0) {
				this.fillObj(this.model, VNode.data.model.expression);
			} else if (VNode.data && VNode.data.directives && this.isBindModel(VNode.data.directives) && this.isBindModel(VNode.data.directives).value === undefined) {
				this.fillObj(this.model, VNode.data.directives[0].expression);
			}
		},
		//判断原始标签是否绑定model属性,是:返回v-model指令元素,否:返回false
		isBindModel(directives) {
			let modelArr = directives.filter(directive => {
				return directive.rawName === 'v-model';
			});
			if (modelArr.length === 0) {
				return false;
			} else if (modelArr[0].expression && modelArr[0].expression.indexOf(this.modelName) === 0) {
				return modelArr[0];
			} else {
				return false;
			}
		},
		//完善指定对象
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
			});
		},
		//判断始标签是否包含v-model指令
		isHasVmodel(directives){
			let modelArr = directives.filter(directive => {
				return directive.rawName === 'v-model';
			});
			if (modelArr.length === 0) {
				return false;
			} else if (modelArr[0].expression) {
				return true;
			} else {
				return false;
			}
		},
		//获取modelprop
		getModelProp(VNode) {
			if (VNode.data && VNode.data.model && VNode.data.model.expression && VNode.data.model.expression.indexOf(this.modelName) === 0) {
				// this.fillObj(this.model, VNode.data.model.expression);
			} else if (VNode.data && VNode.data.directives && this.isBindModel(VNode.data.directives)) {
				// this.fillObj(this.model, VNode.data.directives[0].expression);
			}
		},
		//获取一般prop
		getComProp(VNode, prop) {
			return (VNode.componentOptions && VNode.componentOptions.propsData && VNode.componentOptions.propsData[prop]) || (VNode.data && VNode.data.attrs && VNode.data.attrs[prop]);
		},
		resetFields(){
			this.$refs.comform.resetFields();
		}
	}
};
</script>

<style></style>
