<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="../../assets/img/admin/logo-white.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Forgot Password?</h1>
                            <p class="account-subtitle">Enter your email to get a password reset link</p>
                            
                            <!-- Form -->
                            <form action="/admin/login">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Email">
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                                </div>
                            </form>
                            <!-- /Form -->
                            
                            <div class="text-center dont-have">Remember your password? <router-link to="/template/admin/login">Login</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->

</template>