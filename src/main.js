import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import App from './App'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(router)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

/* eslint-disable no-new */

new Vue({
    el: '#app',
    router:router,
    components: {
        App,
    },
    template: '<App/>'
})
