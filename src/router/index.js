import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Chat from "../components/chat.vue";
import StompChat from "../components/stompChat.vue";


const routes = [{
    path: "/",
    name: "index",
    component: HelloWorld,
},
    {
        path:"/chat",
        name:"chat",
        component: Chat,
    },
    {
        path: "/stompChat",
        name: "stompChat",
        component:StompChat,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;