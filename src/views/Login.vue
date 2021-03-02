<template>
	<div class="main">
		<div class="login"><com-text v-model="username" />
		<com-form value="777"/>
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
	}
}
</style>
