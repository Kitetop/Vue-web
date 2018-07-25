import Vue from 'vue'
import Router from 'vue-router'
// import MyLogin from '@/pages/MyLogin'
// import todoItem from '@/components/todoItem'
import  Home from '@/views/Home'
Vue.use(Router)
export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'index',
        //   component: MyLogin,
        // },
        {
            path: '/',
            name: 'Home',
            component: Home,
        }
    ],
});
