<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="../../assets/img/admin/logo.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <div class="lock-user">
                                <img class="rounded-circle" src="../../assets/img/admin/profiles/avatar-12.jpg" alt="User Image">
                                <h4>Allen Davis</h4>
                            </div>
                            
                            <!-- Form -->
                            <form action="/admin/index">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Password">
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block" type="submit">Enter</button>
                                </div>
                            </form>
                            <!-- /Form -->
                            
                            <div class="text-center dont-have">Sign in as a different user? <router-link to="/admin/login">Login</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->
</template>