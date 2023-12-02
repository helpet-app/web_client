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
                                <small-chat v-bind:chats="chats"></small-chat>
                                <!--/список чатов-->
                            </div>
                            <!-- /Chat Left -->

                            <!-- Chat Right -->
                            <div class="chat-cont-right">
                                <div class="chat-header">
                                    <div class="media">
                                        <div class="user-name">
                                            <ul class="nav header-navbar-rht">
                                                <li class="nav-item dropdown logged-item">
                                                    <a class="dropdown-toggle nav-link" data-toggle="dropdown">
                                                        <span class="user-img">
                                                            <img class="rounded-circle mr-2" src="../../assets/img/website/user/user.jpg"
                                                                 width="31" alt="Darren Elder">
                                                            Клиент
                                                        </span>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="/mentor/index">Перейти в профиль</a>
                                                        <a class="dropdown-item" href="/mentor/profile-settings">История приемов</a>
                                                        <a class="dropdown-item" href="/pages/login">Оставить комментарий после приема</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="media">
                                        <div class="user-name">
                                            <ul class="nav header-navbar-rht">
                                                <li class="nav-item dropdown logged-item">
                                                    <a class="dropdown-toggle nav-link" data-toggle="dropdown">
                                                        <span class="user-img">
                                                            <img class="rounded-circle mr-2" src="../../assets/img/website/user/user.jpg"
                                                                 width="31" alt="Darren Elder">
                                                            Питомец
                                                        </span>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="/mentor/index">Перейти в профиль</a>
                                                        <a class="dropdown-item" href="/mentor/profile-settings">История приемов</a>
                                                        <a class="dropdown-item" href="/pages/login">Оставить комментарий после приема</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-body">
                                    <div class="chat-scroll">
                                        <ul class="list-unstyled">
                                            <li class="media sent">
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>Hello. What can I do for you?</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:30 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media received">
                                                <div class="avatar">
                                                    <img src="../../assets/img/website/user/user.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>I'm just looking around.</p>
                                                            <p>Will you tell me something about yourself?</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:35 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>Are you there? That time!</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:40 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="msg-box">
                                                        <div>
                                                            <div class="chat-msg-attachments">
                                                                <div class="chat-attachment">
                                                                    <img src="../../assets/img/website/img-02.jpg" alt="Attachment">
                                                                    <div class="chat-attach-caption">placeholder.jpg</div>
                                                                    <a href="" class="chat-attach-download">
                                                                        <i class="fas fa-download"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="chat-attachment">
                                                                    <img src="../../assets/img/website/img-03.jpg" alt="Attachment">
                                                                    <div class="chat-attach-caption">placeholder.jpg</div>
                                                                    <a href="" class="chat-attach-download">
                                                                        <i class="fas fa-download"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:41 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media sent">
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>Where?</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:42 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:42 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="msg-box">
                                                        <div>
                                                            <div class="chat-msg-attachments">
                                                                <div class="chat-attachment">
                                                                    <img src="../../assets/img/website/img-04.jpg" alt="Attachment">
                                                                    <div class="chat-attach-caption">placeholder.jpg</div>
                                                                    <a href="" class="chat-attach-download">
                                                                        <i class="fas fa-download"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:50 AM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media received">
                                                <div class="avatar">
                                                    <img src="../../assets/img/website/user/user.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>You wait for notice.</p>
                                                            <p>Consectetuorem ipsum dolor sit?</p>
                                                            <p>Ok?</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>8:55 PM</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="chat-date">Today</li>
                                            <li class="media received">
                                                <div class="avatar">
                                                    <img src="../../assets/img/website/user/user.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>10:17 AM</span>
                                                                    </div>
                                                                </li>
                                                                <li><a href="#">Edit</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media sent">
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <p>Lorem ipsum dollar sit</p>
                                                            <div class="chat-msg-actions dropdown">
                                                                <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="fe fe-elipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <a class="dropdown-item" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                            <ul class="chat-msg-info">
                                                                <li>
                                                                    <div class="chat-time">
                                                                        <span>10:19 AM</span>
                                                                    </div>
                                                                </li>
                                                                <li><a href="#">Edit</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="media received">
                                                <div class="avatar">
                                                    <img src="../../assets/img/website/user/user.jpg" alt="User Image" class="avatar-img rounded-circle">
                                                </div>
                                                <div class="media-body">
                                                    <div class="msg-box">
                                                        <div>
                                                            <div class="msg-typing">
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="chat-footer">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="btn-file btn">
                                                <i class="fa fa-paperclip"></i>
                                                <input type="file">
                                            </div>
                                        </div>
                                        <input type="text" class="input-msg-send form-control" placeholder="Type something">
                                        <div class="input-group-append">
                                            <button type="button" class="btn msg-send-btn">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="item in bookings" :key="item.id">
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <router-link to="/mentee/mentor-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link >
                                                                            <router-link to="/mentee/mentor-profile">{{item.name}}<span>{{item.email}}</span></router-link>
                                                                        </h2>
                                                                    </td>
                                                                    <td class="text-center"><span class="pending">{{item.scheduled_timings}}</span></td>
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
import SmallChat from "./SmallChat.vue";
const images = require.context('../../assets/img/website/user/', false, /\.png$|\.jpg$/)

export default {
    data() {
        return {
            value: '',
            context: null,
            bookings: bookings,
            date: new Date(),
            chats: [
                {id: 1, avatar: '../../assets/img/website/user/user14.jpg', name: 'Marvin Downey', msg: 'Hey, How are you?', lastMsgTime: '2 min', unreadMsgNum: '15'},
                {id: 2, avatar: '../../assets/img/website/user/user1.jpg', name: 'Charlene Reed', msg: 'I\'ll call you later', lastMsgTime: '8:01 PM', unreadMsgNum: ''},
                {id: 3, avatar: '../../assets/img/website/user/user2.jpg', name: 'Travis Trimble', msg: 'Give me a full explanation about our project', lastMsgTime: '7:30 PM', unreadMsgNum: '4'},
            ],
        }
    },
    methods: {
        // Чаты
        fetchChats(){

        },
        fetchChat(){

        },


        //Расписание
        fetchShedule(){

        },
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    components: {
        SmallChat

    }
}
</script>