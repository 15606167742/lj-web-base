<template>
	<div class="main">
		<div class="login">
			<el-form :model="formdata" ref="form" label-width="auto">
				<el-form-item label="账号" prop="username">
					<el-input v-model="formdata.username" type="text" />
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="formdata.password" show-password />
				</el-form-item>
				<el-form-item label="年龄" prop="info.age">
					<el-input v-model="formdata.info.age" type="number" />
				</el-form-item>
				<el-form-item label="测试" prop="name">
					<el-input v-model="test.name" />
				</el-form-item>
				<el-form-item label="测试">
					<el-form-item label="测试abc" prop="abc">
						<input :value="formdata.abc" />
					</el-form-item>
					<el-form-item label="测试name" prop="name">
						<input v-model="formdata.name" />
					</el-form-item>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button type="warning" @click="onReset">重置</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
			<com-form :model="formdata" model-name="formdata" size="mini">
				<com-text v-model="formdata.username" label="用户名" placeholder="啥">
					<template #prepend>
						<button>干</button>
					</template>
				</com-text>
				<com-password v-model="formdata.password" label="密码"></com-password>
				<com-text v-model="test.name" label="测试" />
				<input :value="formdata.abc" label="abc" />
				<input v-model="formdata.name" />
				<com-text v-model="formdata.info.age" label="年龄" />
				<com-template label="按钮">
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button>取消</el-button>
				</com-template>
				<com-template>
				</com-template>
			</com-form>
		</div>
	</div>
</template>

<script>
	import ComTemplate from '@/components/common/form/ComTemplate.vue';
	import ComText from '@/components/common/form/ComText.vue';
	import ComPassword from '@/components/common/form/ComPassword.vue';
	import ComForm from '@/components/common/form/ComForm.vue';
	export default {
		name: 'Login',
		components: {
			ComTemplate,
			ComText,
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
					username: 'ccc',
					// password: '123456',
					info: {
						// age: '18',
					},
				},
			};
		},
		methods: {
			onSubmit() {
				console.log(this.formdata, this.test)
			},
			onReset() {
				this.$refs.form.resetFields();
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
