<template>
    <div class="chat-users-list">
        <div class="chat-scroll">
            <div v-for="chat in chats">
                <a href="javascript:void(0);" class="media">
                    <div class="media-img-wrap">
                        <div class="avatar avatar-away">
                            <img src={{chat.avatar}} alt="User Image" class="avatar-img rounded-circle">
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div class="user-name">{{ chat.name }}</div>
                            <div class="user-last-chat">{{ chat.msg }}</div>
                        </div>
                        <div>
                            <div class="last-chat-time block">{{ chat.lastMsgTime }}</div>
                            <div v-if="chat.unreadMsgNum" class="badge badge-success badge-pill fill-blue">{{ chat.unreadMsgNum }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      chats: {
          type: Array,
          required: true,
      }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>