<template>
    <div class="main-wrapper">
        <doctor-header></doctor-header>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <!-- Чат -->
                    <div class="col-lg-8 col-sm-12">
                        <div class="chat-window">
                            <div class="chat-cont-left">
                                <div class="chat-header">
                                    <span>Чаты</span>
                                </div>
                                <!--список чатов-->
                                <div class="chat-users-list">
                                    <div class="chat-scroll">
                                        <div @click="setChatId(0)">
                                        <a class="media">
                                            <div class="media-img-wrap">
                                                <div class="avatar avatar-away">
                                                    <img src="../../assets/img/website/user/face1.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                            </div>
                                            <div class="media-body">
                                                <div>
                                                    <div class="user-name">{{ chats[0].name }}</div>
                                                    <div class="user-last-chat">{{ chats[0].msg }}</div>
                                                </div>
                                                <div>
                                                    <div class="last-chat-time block">{{ chats[0].lastMsgTime }}</div>
                                                    <div v-if="chats[0].unreadMsgNum" class="badge badge-success badge-pill fill-blue">{{ chats[0].unreadMsgNum }}</div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div @click="setChatId(1)">
                                        <a href="javascript:void(0);" class="media">
                                            <div class="media-img-wrap">
                                                <div class="avatar avatar-away">
                                                    <img src="../../assets/img/website/user/face2.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                            </div>
                                            <div class="media-body">
                                                <div>
                                                    <div class="user-name">{{ chats[1].name }}</div>
                                                    <div class="user-last-chat">{{ chats[1].msg }}</div>
                                                </div>
                                                <div>
                                                    <div class="last-chat-time block">{{ chats[1].lastMsgTime }}</div>
                                                    <div v-if="chats[1].unreadMsgNum" class="badge badge-success badge-pill fill-blue">{{ chats[1].unreadMsgNum }}</div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div @click="setChatId(2)">
                                        <a href="javascript:void(0);" class="media">
                                            <div class="media-img-wrap">
                                                <div class="avatar avatar-away">
                                                    <img src="../../assets/img/website/user/face3.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                            </div>
                                            <div class="media-body">
                                                <div>
                                                    <div class="user-name">{{ chats[2].name }}</div>
                                                    <div class="user-last-chat">{{ chats[2].msg }}</div>
                                                </div>
                                                <div>
                                                    <div class="last-chat-time block">{{ chats[2].lastMsgTime }}</div>
                                                    <div v-if="chats[2].unreadMsgNum" class="badge badge-success badge-pill fill-blue">{{ chats[2].unreadMsgNum }}</div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
<!--                                            </div>-->
<!--                                        </div>-->
                                    </div>
                                </div>
                                <!--/список чатов-->
                            </div>

                            <!-- Chat Right -->
                            <full-chat v-bind:active-chat-id="activeChatId"></full-chat>
                            <!-- /Chat Right -->
                        </div>

                    </div>
                    <!-- /Чат -->
                    <!-- Правая сторона календаря -->
                    <div class="col-lg-4 col-sm-12">
                        <div class="card">
                            <div class="pt-2 card-body">
                                <!-- Календарь -->
                                <div class="row">
                                    <div class="col-sm-12 mt-2 mb-2">
                                            <datepicker class="picker form-control select" v-model="date"/>
                                    </div>
                                </div>

                                <!-- /Календарь -->
                                <!-- Расписание -->
                                <div class="row">
                                    <div class="col-sm-12">

                                        <h3 class="pb-1">Расписание дня</h3>

                                        <!-- Mentee List Tab -->
                                        <div class="tab-pane show active" id="mentee-list">
                                            <div class="card card-table">
                                                <div class="card-body">
                                                    <div class="table-responsive">

                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Клиент</th>
                                                                    <th class="text-center">SCHEDULED TIMINGS</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr v-if="date.getDate() === 4" v-for="item in bookings" :key="item.id" data-toggle="collapse" data-target="#accordion" class="clickable">
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <router-link to="/mentee/mentor-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link >
                                                                            <router-link to="/mentee/mentor-profile">{{item.name}}<span>{{item.email}}</span></router-link>
                                                                        </h2>
                                                                    </td>
                                                                    <td v-if="item.status === 'active'" class="text-center"><span class="accept">{{item.scheduled_timings}}</span></td>
                                                                    <td v-if="item.status === 'pending'" class="text-center"><span class="pending">{{item.scheduled_timings}}</span></td>
                                                                    <td v-if="item.status === 'reject'" class="text-center"><span class="reject">{{item.scheduled_timings}}</span></td>
                                                                    <td>
                                                                        <button class="btn" type="button" data-toggle="collapse" data-target="#collapseme">
                                                                            <i class="fas fa-file-invoice" ></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>

                                                                <tr v-if="date.getDate() === 3" v-for="item in bookings2" :key="item.id" data-toggle="collapse" data-target="#accordion" class="clickable">
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <router-link to="/mentee/mentor-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link >
                                                                            <router-link to="/mentee/mentor-profile">{{item.name}}<span>{{item.email}}</span></router-link>
                                                                        </h2>
                                                                    </td>
                                                                    <td v-if="item.status === 'active'" class="text-center"><span class="accept">{{item.scheduled_timings}}</span></td>
                                                                    <td v-if="item.status === 'pending'" class="text-center"><span class="pending">{{item.scheduled_timings}}</span></td>
                                                                    <td v-if="item.status === 'reject'" class="text-center"><span class="reject">{{item.scheduled_timings}}</span></td>
                                                                    <td>
                                                                        <button class="btn" type="button" data-toggle="collapse" data-target="#collapseme">
                                                                            <i class="fas fa-file-invoice" ></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                        <div id="accordion" class="collapse">
                                                                            <p>Ссылка: <a href="https://meet.google.com/hog-ybdm-sxi">https://meet.google.com/hog-ybdm-sxi</a> </p>
                                                                            <span>Комментарий</span>
                                                                            <textarea class="form-control service-desc" name="about"></textarea>
                                                                            <button class="btn btn-primary mt-2">Отправить</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>

                                                        </table>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /Mentee List Tab -->
                                    </div>
                                </div>
                                <!-- /Расписание -->
                            </div>
                        </div>
                    </div>
                    <!-- /Правая сторона календаря -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bookings from '../../assets/json/website/bookings.json';
import bookings2 from '../../assets/json/website/bookings2.json';
import SmallChat from "./SmallChat.vue";
import FullChat from "./FullChat.vue";
const images = require.context('../../assets/img/website/user/', false, /\.png$|\.jpg$/)

export default {
    data() {
        return {
            value: '',
            context: null,
            activeChatId: 0,
            bookings: bookings,
            bookings2: bookings2,
            date: new Date(),
            chats: [
                {id: 1, avatar: '', name: 'Ирина Лукина', msg: 'Спасибо, увидимся в назначенное время.', lastMsgTime: '8:42 AM', unreadMsgNum: ''},
                {id: 2, avatar: '../../assets/img/website/user/user1.jpg', name: 'Дмитрий Соколов', msg: 'Давайте', lastMsgTime: '8:45 AM', unreadMsgNum: ''},
                {id: 3, avatar: '../../assets/img/website/user/user2.jpg', name: 'Иван Сергеенко', msg: 'С ним все хорошо', lastMsgTime: '8:46 AM', unreadMsgNum: ''},
            ],
        }
    },
    methods: {
        // Чаты (нет апи:() )
        fetchChats(){

        },
        fetchChat(){

        },

        setChatId: function (newId) {
            this.activeChatId = newId;
        },

        //Расписание
        fetchShedule(){

        },

        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    components: {
        FullChat,
        SmallChat

    }
}
</script>