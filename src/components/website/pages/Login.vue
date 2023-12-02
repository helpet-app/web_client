<template>
	<div class="account-page">
		<div class="main-wrapper">
			<!-- Page Content -->
			<div class="content">
				<!-- Login Tab Content -->
				<div class="account-content">
					<div class="account-box">
						<div class="login-right">
							<div class="login-header">
								<h3><span>Helpet</span></h3>
							</div>

							<form>
								<div class="form-group">
									<label class="form-control-label">Логин</label>
									<input v-model="username" type="email" class="form-control">
								</div>

								<div class="form-group">
									<label class="form-control-label">Пароль</label>
									<div class="pass-group">
										<input v-model="password" type="password" class="form-control pass-input">
									</div>
								</div>

								<button class="btn btn-primary login-btn" type="button" @click="$router.push('/pages/doctor-main')">Войти</button>

								<div class="text-center dont-have">Нет аккаунта? <router-link to="/pages/register">Регистрация</router-link></div>
							</form>
						</div>
					</div>
				</div>
				<!-- /Login Tab Content -->
			</div>
			<!-- /Page Content -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push("/pages/doctor-main");
		}
	},
	methods: {
		handleLogin(username, password) {
			this.$store.dispatch("URL", username, password)
		}
	}
}
</script>