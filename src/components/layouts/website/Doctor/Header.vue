<template>
    <div>
        <!-- Header -->
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <button type="button" class="btn btn-primary">Принимать звонки</button>
                    <ul className="nav header-navbar-rht">
                        <!-- User Menu -->
                        <li className="nav-item dropdown logged-item">
                            <a className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span className="user-img">
                                    <img className="rounded-circle mr-2" src="../../../../assets/img/website/user/user-icon.png"
                                         width="31" alt="Darren Elder">
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/pages/doctor-profile">Личный кабинет</a>
                                <a className="dropdown-item" href="/pages/login">Выйти</a>
                            </div>
                        </li>
                        <!-- /User Menu -->
                    </ul>
                </div>
            </nav>
        </header>
        <!-- /Header -->
    </div>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router';

export default {
    setup() {
        const currentPath = computed(() => {
            return useRoute().name
        })

        return {currentPath}
    }
}
</script>