import Vue from 'vue'
import Router from 'vue-router'
import userCenter from '../pages/userCenter'
import Login from '../pages/myLogin'

export default new Router({
    routes: [
        {
           path: '/',
           component: Login
        },
        {
            path: '/home',
            name: 'userCenter',
            component: userCenter
        },
        {
            path: '*',
            redirect: '/index',
        }
    ],
});
