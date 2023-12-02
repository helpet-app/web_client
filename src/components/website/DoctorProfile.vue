<template>
    <div class="main-wrapper">
        <doctor-header1/>
        <!-- Page Content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row">

                    <!-- Profile Sidebar -->
                    <div class="col-md-5 col-lg-4 col-xl-3">
                        <div class="card">
                            <div class="user-widget pt-2">
                                <div class="profile-img1 pb-1">
                                    <img v-if="profileImage.imageURL" :src="profileImage.imageURL" alt=""/>
                                </div>
                                <div class="user-info-cont pb-2">
                                    <h4 class="usr-name">Jonathan Doe</h4>
                                    <p class="mentor-type">English Literature (M.A)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Profile Sidebar -->

                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card">
                            <div class="card-body">

                                <!-- Profile Settings Form -->
                                <form>
                                    <div class="row form-row">
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <div class="change-avatar">
                                                    <div class="profile-img">
                                                        <img v-if="profileImage.imageURL" :src="profileImage.imageURL" alt=""/>
                                                    </div>
                                                    <div class="upload-img">
                                                        <div class="change-photo-btn">
                                                            <span><i class="fa fa-upload"></i> Загрузить фотографию</span>
                                                            <input
                                                                type="file"
                                                                class="upload"
                                                                accept="image/*"
                                                                @change="onImageChange"
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 ">
                                            <div class="form-group">
                                                <label>Имя</label>
                                                <input v-bind:value="firstName" @input="firstName = $event.target.value" type="text" class="form-control">

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Фамилия</label>
                                                <input v-bind:value="surname" @input="surname = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Отчество</label>
                                                <input v-bind:value="patronymic" @input="patronymic = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Номер телефона</label>
                                                <input v-bind:value="phoneNumber" @input="phoneNumber = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Почта</label>
                                                <input v-bind:value="email" @input="email = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Специализация</label>
                                                <input v-bind:value="specialization" @input="specialization = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Клиника</label>
                                                <input v-bind:value="hospital" @input="hospital = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Дополнительное подтверждение квалификации</label>
                                                <input v-bind:value="additionalInfo" @input="additionalInfo = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="checkbox">
                                                <label>
                                                    <input v-model="abilityToAcceptCalls" type="checkbox" name="checkbox" > Возможность принимать срочные звонки
                                                    <label for="checkbox">{{ abilityToAcceptCalls }}</label>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Логин</label>
                                                <input v-bind:value="username" @input="username = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Пароль</label>
                                                <input v-bind:value="password" @input="password = $event.target.value" type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button type="submit" class="btn btn-primary submit-btn" @click="setValues">Save Changes</button>
                                    </div>
                                </form>
                                <!-- /Profile Settings Form -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Content -->
    </div>
</template>

<script>

import {defineComponent} from "vue";
import DoctorSidebar from "../layouts/website/Doctor/SideBar.vue";
import DoctorHeader from "../layouts/website/Doctor/Header.vue";

export default defineComponent({
    components: {
        DoctorHeader,
        DoctorSidebar,
    },
    data(){
        return {
            firstName: '',
            surname: '',
            patronymic: '',
            phoneNumber: '',
            email: '',
            specialization: '',
            hospital: '',
            additionalInfo: '',
            abilityToAcceptCalls: false,
            username: '',
            password: '',
            profileImage:{
                image: '',
                imageURL: '',
            },
        }
    },
    methods: {
        onImageChange(e) {
            const file = e.target.files[0]
            this.profileImage.image = file
            this.profileImage.imageURL = URL.createObjectURL(file)
        },

        getInitValues() {
            const URL = ""
            //get token

            //axios
        },

        //TODO: выключить дефолт сабмит
        setValues() {
            event.preventDefault();
            this.username = "haha";
        },

        updateValues() {
            const URL = ""
            //get token

            //form data

            //axios

        }
    },
})
</script>
