import Vue from 'vue'
import Router from 'vue-router'
import userCenter from '../pages/userCenter'
import login from '../pages/myLogin'
import myVotes from '../pages/myVotes'
import createVote from '../pages/createVote'
import startVote from  '../pages/startVote'

//通过mode设置路由模式
export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          component:login
        },
        {
           path: '/user/:username/:userId',
           component: userCenter,
            children:[
                {
                    path: '/user/:username/:userId',
                    component: myVotes,
                },
                {
                    path: '/vote/:username/:userId',
                    component: createVote,
                },
                {
                    path: '/start/:username/:userId',
                    component: startVote,
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '*',
            redirect: '/',
        }
    ],
});
