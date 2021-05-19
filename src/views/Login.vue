<template>
	<div class="main">
		<div class="login">
			<!-- <el-form :model="formdata" :rules="formRules" ref="form" label-width="auto" size="medium">
				<el-form-item label="账号" prop="sex">
					<el-radio-group v-model="formdata.sex">
						<el-radio label="线上品牌商赞助"></el-radio>
						<el-radio label="线下场地免费"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button type="warning" @click="onReset">重置</el-button>
					<el-form-item label="取消" required>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form-item>
			</el-form> -->
			<com-check v-model="formdata.check" fill="yellow">协议</com-check>
			<com-checkbox v-model="formdata.sexes" :checkboxes="sexRadio" type="border" label="性别"></com-checkbox>
			<com-form ref="form" :model="formdata" model-name="formdata" :rules="formRules">
				<com-text v-model="formdata.username" label="用户名" :minlength="3" :maxlength="10" placeholder="啥" />
				<com-password v-model="formdata.password" label="密码" :rules="passwordRules"></com-password>
				<com-radio v-model="formdata.sex" :radios="sexRadio" label="性别"></com-radio>
				<com-checkbox v-model="formdata.sexes" :checkboxes="sexRadio" type="button" label="性别"></com-checkbox>
				<com-checkbox v-model="formdata.sexes" :checkboxes="sexRadio" type="border" label="性别"></com-checkbox>
				<com-checkbox v-model="formdata.sexes" :checkboxes="sexRadio" label="性别" :min="1" :max="2"></com-checkbox>
				<com-template label="按钮" :colspan="2">
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button type="warning" @click="onReset">重置</el-button>
					<el-button type="danger" @click="onValidate">局部验证</el-button>
					<el-button @click="onCancle">取消验证</el-button>
				</com-template>
			</com-form>
		</div>
	</div>
</template>

<script>
	import ComTemplate from '@/components/common/form/ComTemplate.vue';
	import ComText from '@/components/common/form/ComText.vue';
	// import ComTextarea from '@/components/common/form/ComTextarea.vue';
	import ComPassword from '@/components/common/form/ComPassword.vue';
	import ComRadio from '@/components/common/form/ComRadio.vue';
	import ComCheckbox from '@/components/common/form/ComCheckbox.vue';
	import ComCheck from '@/components/common/form/ComCheck.vue';
	import ComForm from '@/components/common/form/ComForm.vue';
	import {
		login
	} from '@/network/login.js'
	export default {
		name: 'Login',
		components: {
			ComTemplate,
			ComText,
			// ComTextarea,
			ComPassword,
			ComRadio,
			ComCheckbox,
			ComCheck,
			ComForm
		},
		data() {
			return {
				username: 'ccc',
				password: '123456',
				test: {
					// name: '测试用例'
				},
				formdata: {
					abc: 'abc',
					name: '测试用例',
					sex: 1,
					sexes: [],
					check: '',
					// username: 'ccc',
					// password: '123456',
					info: {
						// age: '18',
					}
				},
				formRules: {
					username: [{
						required: true,
						message: '最小输入2个字符',
						trigger: 'blur'
					}],
				},
				passwordRules: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}],
				sexRadio: [{
					label: 1,
					name: '男',
				}, {
					label: 2,
					name: '女',
				}, {
					label: 3,
					name: '其他',
				}],
			};
		},
		mounted() {
			// setTimeout(()=>{
			// 	this.formdata={
			// 		username: 'ccc',
			// 		password: '123456',
			// 		info: {}
			// 	}
			// }, 3000)
		},
		methods: {
			onSubmit() {
				console.log(this.formdata)
				this.$refs.form.validate().then(() => {
					login().then(data => {
						console.log(data)
					})
				});
			},
			onReset() {
				this.$refs.form.resetFields();
			},
			onValidate() {
				this.$refs.form.validateField(['name', 'password'], mes => {
					console.log(mes)
				})
			},
			onCancle() {
				this.$refs.form.clearValidate(['password', 'info.age']);
			},
		}
	};
</script>

<style scoped lang="scss">
	.main {
		width: 100vw;
		height: 100vh;
		background-image: url(~@/assets/img/bg_login.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		.login {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 20px;
			border-radius: 10px;
			background-color: var(--color-bg-default);
		}
	}
</style>
