import Vue from 'vue'
import Router from 'vue-router'
import userCenter from '../pages/userCenter'
import login from '../pages/myLogin'
import myVotes from '../pages/myVotes'
import createVote from '../pages/createVote'

//通过mode设置路由模式
export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          component:userCenter
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
                    path: '/createVote/:userId',
                    component: createVote,
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
            redirect: '/home',
        }
    ],
});
