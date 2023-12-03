<template>
    <div class="chat-cont-right">
        <!-- Chat Header  -->
        <div class="chat-header">
            <div class="media">
                <div class="user-name">
                    <ul class="nav header-navbar-rht">
                        <li class="nav-item dropdown logged-item">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span class="user-img">
                                    <img class="rounded-circle mr-2" :src="chat[activeChatId].avatar"
                                         width="31" alt="Darren Elder">
                                    Клиент
                                </span>
                            </a>
<!--                            <div class="dropdown-menu dropdown-menu-right">-->
<!--                                <a class="dropdown-item" href="/mentor/index">Перейти в профиль</a>-->
<!--                                <a class="dropdown-item" href="/mentor/profile-settings">История приемов</a>-->
<!--                                <a class="dropdown-item" href="/pages/login">Оставить комментарий после приема</a>-->
<!--                            </div>-->
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
                                    <img class="rounded-circle mr-2" :src="chat[activeChatId].animalAvatar"
                                         width="31" alt="Darren Elder">
                                    Питомец
                                </span>
                            </a>
<!--                            <div class="dropdown-menu dropdown-menu-right">-->
<!--                                <a class="dropdown-item" href="/mentor/index">Перейти в профиль</a>-->
<!--                                <a class="dropdown-item" href="/mentor/profile-settings">История приемов</a>-->
<!--                                <a class="dropdown-item" href="/pages/login">Оставить комментарий после приема</a>-->
<!--                            </div>-->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--  /Chat Header-->

        <!--  Chat Boody-->
        <div class="chat-body">
            <div class="chat-scroll">
                <ul class="list-unstyled" v-for="message in chat[activeChatId].messages">
                    <li v-if="message.author === 1" class="media sent">
                        <div class="media-body">
                            <div class="msg-box">
                                <div>
                                    <p>{{ message.text }}</p>
                                    <div v-if="message.img" class="chat-msg-attachments">
                                        <div class="chat-attachment">
                                            <img src={{message.img}} alt="Attachment">
                                        </div>
                                    </div>
                                    <ul class="chat-msg-info">
                                        <li>
                                            <div class="chat-time">
                                                <span>{{ message.time }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-else-if="message.author === 2" class="media received">
                        <div class="media-body">
                            <div class="msg-box">
                                <div>
                                    <p>{{ message.text }}</p>
                                    <div v-if="message.img" class="chat-msg-attachments">
                                        <div>
                                            <img  class="chat-img" src="../../assets/img/website/cat.jpg" alt="Attachment">
                                        </div>
                                    </div>
                                    <ul class="chat-msg-info">
                                        <li>
                                            <div class="chat-time">
                                                <span>{{ message.time }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
<!--        /Chat Body-->
<!--        Chat Footer - Send btn-->
        <div class="chat-footer">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="btn-file btn">
                        <i class="fa fa-paperclip"></i>
                        <input type="file">
                    </div>
                </div>
                <input type="text" class="input-msg-send form-control" placeholder="...">
                <div class="input-group-append">
                    <button type="button" class="btn msg-send-btn">Отправить</button>
                </div>
            </div>
        </div>
<!--        /Chat Footer - Send btn-->
    </div>
</template>

<script>
import face1 from "../../assets/img/website/user/face1.jpg"
import face2 from "../../assets/img/website/user/face2.jpg"
import face3 from "../../assets/img/website/user/face3.jpg"
import cat from "../../assets/img/website/cat.jpg"
import dog1 from "../../assets/img/website/dog1.jpg"
import dog2 from "../../assets/img/website/dog2.jpg"

export default {
    props:{
        activeChatId: {
            required: true,
        },
    },
    data(){
        return{
            chat: [
                {
                    avatar: face1,
                    animalAvatar: cat,
                    messages: [
                        {id: 1, author: 1, text: "Здравствуйте. \n Вижу, что записались на сегодня, чем могу помочь?", img: null, time: "8:30 AM"},
                        {id: 2, author: 2, text: "Просто хочу проверить здоровье котика.", img: null, time: "8:35 AM" },
                        {id: 3, author: 1, text: "Можете скинуть его фото, не вижу его породу в профиле.", img: null, time: "8:40 AM"},
                        {id: 4, author: 2, text: "", img: "../../assets/img/website/cat.jpg", time: "8:41 AM"},
                        {id: 5, author: 1, text: "Спасибо, увидимся в назначенное время.", img: null, time: "8:42 AM"},
                    ]
                },
                {
                    avatar: face2,
                    animalAvatar: dog1,
                    messages: [
                        {id: 1, author: 2, text: "Привет, можем ли перенести встречу?", img: null, time: "8:30 AM"},
                        {id: 2, author: 1, text: "Да, конечно, на какое время?", img: null, time: "8:35 AM" },
                        {id: 3, author: 2, text: "Есть свободное время в 16:00 послезавтра.", img: null, time: "8:40 AM"},
                        {id: 4, author: 1, text: "Давайте", img: null, time: "8:45 AM"},
                    ]
                },
                {
                    avatar: face3,
                    animalAvatar: dog2,
                    messages: [
                        {id: 1, author: 2, text: "Здравствуйте, Константин.\n У моей собаки нос сухой, что делать", img: null, time: "8:30 AM"},
                        {id: 2, author: 1, text: "Он сейчас спит?", img: null, time: "8:35 AM" },
                        {id: 3, author: 2, text: "Да.", img: null, time: "8:40 AM"},
                        {id: 4, author: 1, text: "У собак нос сухой, когда они спят :)", img: null, time: "8:45 AM"},
                        {id: 5, author: 1, text: "С ним все хорошо", img: null, time: "8:46 AM"},
                    ]
                }
            ],
        }
    }
}
</script>