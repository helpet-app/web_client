<template>
    	<!-- Header -->
            <div class="header">
            
                <!-- Logo -->

                <div class="header-left">
                    <router-link to="/admin/index" class="logo">
                    <img src="../../../assets/img/admin/logo-white.png" alt="Logo">
                    </router-link>
                    <router-link to="/admin/index" class="logo logo-small">
                    <img src="../../../assets/img/admin/logo-small.png" alt="Logo" width="30" height="30">
                    </router-link>
                </div>
                <!-- /Logo -->
                
                <a href="javascript:void(0);" id="toggle_btn">  <i class="fas fa-bars"></i>
                </a>
                <div class="top-nav-search">
                    <form>
                        <input type="text" class="form-control" placeholder="Search here">
                        <button class="btn" type="submit"><search-icon size="1x" class="custom-class"></search-icon>
                        </button>
                    </form>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <a class="mobile_btn" id="mobile_btn">  <i class="fas fa-bars"></i>
                </a>
                <!-- /Mobile Menu Toggle -->
                
                <!-- Header Right Menu -->
                <ul class="nav user-menu">
                    <!-- Flag -->
                    <li class="nav-item dropdown has-arrow flag-nav mr-2">
                        <a class="nav-link dropdown-toggle align-items-center" data-toggle="dropdown" href="#" role="button">
                        <img src="../../../assets/img/admin/flags/us-1.png" alt="" width="24" height="16" class="lang-flag mr-1"> English 
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" class="dropdown-item">
                            <img src="../../../assets/img/admin/flags/us.png" alt="" height="16"> English
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                            <img src="../../../assets/img/admin/flags/fr.png" alt="" height="16"> French
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                            <img src="../../../assets/img/admin/flags/es.png" alt="" height="16"> Spanish
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                            <img src="../../../assets/img/admin/flags/de.png" alt="" height="16"> German
                            </a>
                        </div>
                    </li>
                    <!-- /Flag --> 
                    
                    <!-- Fullscreen -->
                    <li class="nav-item dropdown">
                        <a href="#" id="btnFullscreen" class=" ">
                            <i data-feather="maximize"></i> 
                        </a>
                    </li>
                    <!-- /Fullscreen -->
                    
                    <!-- Notifications -->
                    <li class="nav-item dropdown noti-dropdown">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i data-feather="bell"></i>  <span class="badge badge-pill">3</span>
                    </a>
                        <div class="dropdown-menu notifications">
                            <div class="topnav-dropdown-header">
                                <span class="notification-title">Notifications</span>
                                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                            </div>
                            <div class="noti-content">
                                <ul class="notification-list">
                                    <li class="notification-message">
                                        <a href="#">
                                            <div class="media">
                                                <span class="avatar avatar-sm">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="../../../assets/img/admin/user/user.jpg">
                                                </span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Jonathan Doe</span> Schedule <span class="noti-title">his appointment</span></p>
                                                    <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="#">
                                            <div class="media">
                                                <span class="avatar avatar-sm">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="../../../assets/img/admin/user/user1.jpg">
                                                </span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Julie Pennington</span> has booked her appointment to <span class="noti-title">Ruby Perrin</span></p>
                                                    <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="#">
                                            <div class="media">
                                                <span class="avatar avatar-sm">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="../../../assets/img/admin/user/user2.jpg">
                                                </span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Tyrone Roberts</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
                                                    <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                               </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="notification-message">
                                        <a href="#">
                                            <div class="media">
                                                <span class="avatar avatar-sm">
                                                <img class="avatar-img rounded-circle" alt="User Image" src="../../../assets/img/admin/user/user4.jpg">
                                                </span>
                                                <div class="media-body">
                                                    <p class="noti-details"><span class="noti-title">Patricia Manzi</span> send a message <span class="noti-title"> to his Mentee</span></p>
                                                    <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="topnav-dropdown-footer">
                                <a href="#">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    <!-- /Notifications -->
                    
                    <li class="nav-item dropdown has-arrow main-drop ml-3">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span class="user-img"><img src="../../../assets/img/admin/profiles/avatar-06.jpg" alt=""> Admin
                        <span class="status online"></span></span>
                        </a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/admin/profile"><i class="feather-user"></i> My Profile</router-link> 
                            <router-link class="dropdown-item" to="/admin/login"><i class="feather-power"></i> Logout</router-link>
                        </div>
                    </li>
                </ul>
                <!-- /Header Right Menu -->
                
            </div>
            <!-- /Header -->
</template>

<script>
    import { onMounted } from 'vue'
    import feather from 'feather-icons'
    export default {
        setup() {
            onMounted(()=> {
                feather.replace()
            })
        },
        computed: {
           currentPath() {
               return this.$route.name
           }
       }
    }
</script>