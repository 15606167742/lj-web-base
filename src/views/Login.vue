<template>
	<div class="main">
		<div class="login">
			<el-input v-model="username" type="text" :minlength="5" :maxlength="10" :show-word-limit="true" placeholder="请输入内容" />
			<com-text v-model="username" placeholder="啥" :maxlength="20" :show-word-limit="true">
				<template #prefix>
					<i class="iconfont icondiff"></i>
				</template>
			</com-text>
			<com-form value="777" />
		</div>
	</div>
</template>

<script>
	import ComText from '@/components/common/form/ComText.vue';
	import ComForm from '@/components/common/form/ComForm.vue';
	export default {
		name: 'Login',
		components: {
			ComText,
			ComForm
		},
		data() {
			return {
				username: 'ccc'
			};
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
			padding: 20px;
			border-radius: 10px;
			background-color: var(--color-bg-default);
			
			.iconfont {
				display: inline-block;
				width: 25px;
				line-height: 40px;
			}
		}
	}
</style>
