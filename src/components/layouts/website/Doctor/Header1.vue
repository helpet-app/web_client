<template>
    <div>
        <!-- Header -->
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="container-fluid">
                    <button type="button" class="btn btn-primary">Принимать звонки</button>
                    <ul className="nav header-navbar-rht">
                        <!-- User Menu -->
                        <button class="btn btn-secondary">
                            <router-link to="/pages/doctor-main">Вернуться на экран</router-link>
                        </button>
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