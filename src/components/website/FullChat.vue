<template>
    <div class="chat-cont-right">
<!--        Chat Header  -->
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
        <!--  /Chat Header-->
<!--        Chat Boody-->
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
                <input type="text" class="input-msg-send form-control" placeholder="Type something">
                <div class="input-group-append">
                    <button type="button" class="btn msg-send-btn">Send</button>
                </div>
            </div>
        </div>
<!--        /Chat Footer - Send btn-->
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>