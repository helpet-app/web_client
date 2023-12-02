<template>
    <!-- Sidebar -->
        <div class="profile-sidebar">
            <div class="user-widget">
                <div class="pro-avatar">JD</div>

                <div class="user-info-cont">
                    <h4 class="usr-name">Jonathan Doe</h4>
                    <p class="mentor-type">English Literature (M.A)</p>
                </div>
            </div>


        </div>
    <!-- /Sidebar -->
</template>

<script>
export default {
    computed: {
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>