<template>
	<div class="about">
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="年龄" prop="age">
				<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
				<el-button @click="resetForm()">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data() {
			return {
				numberValidateForm: {
					age: '18'
				}
			}
		},
		mounted() {
			this.numberValidateForm.age = '66'
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm() {
				this.$refs.numberValidateForm.resetFields();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.about {
		margin-top: 20px;
		width: 800px;
	}
</style>
