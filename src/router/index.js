import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '@/pages/MyLogin'
import todoItem from '@/components/todoItem'
Vue.use(Router)

const routes = [

]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: MyLogin,
    },
    {
        path: '/index',
        name: 'index',
        component: todoItem,
    }
  ],
});
