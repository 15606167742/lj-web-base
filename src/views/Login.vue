<template>
	<div class="main">
		<div class="login">
			<!-- <el-form :model="formdata" :rules="formRules" ref="form" label-width="auto" size="medium">
				<el-form-item label="账号" prop="username">
					<el-input v-model="formdata.username" type="text" prefix-icon="el-icon-video-camera-solid">
						<template #prepend>
							xx
						</template>
					</el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password"><el-input v-model="formdata.password" show-password /></el-form-item>
				<el-form-item label="年龄" prop="info.age"><el-input v-model="formdata.info.age" type="number" /></el-form-item>
				<el-form-item label="测试model" prop="name"><el-input v-model="test.name" size="big" /></el-form-item>
				<el-form-item label="测试原始标签" prop="abc"><input :value="formdata.abc" @input="formdata.abc = $event.target.value" /></el-form-item>
				<el-form-item label="测试原始标签" prop="name"><input v-model="formdata.name" /></el-form-item>
				<el-form-item label="测试文本" prop="name">
					<el-input v-model="formdata.name" type="textarea" autosize placeholder="请输入内容" :rows="{ minRows: 2 }">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button type="warning" @click="onReset">重置</el-button>
					<el-form-item label="取消" required>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form-item>
			</el-form> -->
			<com-form ref="form" :model="formdata" model-name="formdata" :rules="formRules" size="medium">
				<com-text v-model="formdata.username" label="用户名" placeholder="啥" />
				<com-password v-model="formdata.password" label="密码" :rules="passwordRules"></com-password>
				<com-text v-model="test.name" label="测试" size="large" colspan="2" />
				<com-text v-model="formdata.info.age" label="大运小云年龄" :rules="passwordRules" />
				<com-textarea v-model="formdata.abc" label="文本" :rules="passwordRules" />
				<input :value="formdata.abc" label="abc" />
				<com-template colspan="2" label="起止日期" required>
					<com-text v-model="formdata.name" :rules="passwordRules" />
					<span style="margin: 0 10px;">-</span>
					<com-text v-model="formdata.info.age" />
				</com-template>
				<input v-model="formdata.password" :rules="passwordRules" />
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
	import ComTextarea from '@/components/common/form/ComTextarea.vue';
	import ComPassword from '@/components/common/form/ComPassword.vue';
	import ComForm from '@/components/common/form/ComForm.vue';
	export default {
		name: 'Login',
		components: {
			ComTemplate,
			ComText,
			ComTextarea,
			ComPassword,
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
					// username: 'ccc',
					// password: '123456',
					info: {
						// age: '18',
					}
				},
				formRules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
				},
				passwordRules: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				],
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
				this.$refs.form.validate().then(()=>{
					console.log('验证成功')
				});
			},
			onReset() {
				this.$refs.form.resetFields();
			},
			onValidate() {
				this.$refs.form.validateField(['name', 'password'], mes=>{
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
