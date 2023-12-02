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
                            <h1>Login</h1>
                            <p class="account-subtitle">Access to our dashboard</p>
                            
                            <!-- Form -->
                            <form>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" @click="$router.push('/admin/index')" type="submit">Login</button>
                                </div>
                            </form>
                            <!-- /Form -->
                            
                            <div class="text-center forgotpass"><router-link to="/admin/forgotpassword">Forgot Password?</router-link></div>
                            <div class="login-or">
                                <span class="or-line"></span>
                                <span class="span-or">or</span>
                            </div>
                              
                            <!-- Social Login -->
                            <div class="social-login">
                                <span>Login with</span>
                                <a href="#" class="facebook"><i class="fab fa-facebook-square"></i></a><a href="#" class="google"><i class="fab fa-google"></i></a>
                            </div>
                            <!-- /Social Login -->
                            
                            <div class="text-center dont-have">Don’t have an account? <router-link to="/admin/register">Register</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->
    
</template>
<style>
    .fa-facebook-square {
        font-size: 14px;
    }
    .fa-google {
        font-size: 14px;
    }
</style>