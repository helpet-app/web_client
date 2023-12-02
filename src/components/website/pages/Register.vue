<template>
	<div class="account-page">
		<!-- Main Wrapper -->
		<div class="main-wrapper">

			<!-- Page Content -->

			<div class="content">

				<!-- Register Content -->
				<div class="account-content">
					<div class="account-box">
						<div class="login-right">
							<div class="login-header">
								<h3><span>Helpet</span></h3>
							</div>

							<!-- Register Form -->
							<form>
								<div class="form-group">
									<label class="form-control-label">Имя</label>
									<input v-model="firstName" id="first-name" type="text" class="form-control" name="first_name" autofocus="">
								</div>

								<div class="form-group">
									<label class="form-control-label">Почта</label>
									<input v-model="email" id="email" type="email" class="form-control">
								</div>

								<div class="form-group">
									<label class="form-control-label">Логин</label>
									<input v-model="username" id="username" type="text" class="form-control">
								</div>

								<div class="form-group">
									<label class="form-control-label">Пароль</label>
									<input v-model="password" id="password" type="password" class="form-control" name="password">
								</div>

								<button class="btn btn-primary login-btn" type="button" @click="$router.push('/')">Зарегистрироваться</button>

								<div class="account-footer text-center mt-3">
									Уже есть аккаунт? <router-link class="forgot-link mb-0" to="/pages/login">Авторизация</router-link>
								</div>

							</form>
							<!-- /Register Form -->
						</div>
					</div>
				</div>
				<!-- /Register Content -->
			</div>
			<!-- /Page Content -->
		</div>
		<!-- /Main Wrapper -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			email: '',
			username: '',
			password: '',
			successful: false,
			loading: false,
			message: "",
		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push("/profile");
		}
	},
	methods: {
		handleRegister() {
			const user = {
				firstName: this.firstName,
				email: this.email,
				username: this.username,
				password: this.password,
			}
			this.$store.dispatch("auth/register", user).then(
					(data) => {
						this.message = data.message;
						this.successful = true;
						this.loading = false;
					},
					(error) => {
						this.message =
								(error.response &&
										error.response.data &&
										error.response.data.message) ||
								error.message ||
								error.toString();
						this.successful = false;
						this.loading = false;
					}
			);
		},
	}
}
</script>