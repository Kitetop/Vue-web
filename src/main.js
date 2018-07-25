import Vue from 'vue/dist/vue'
import Home from './views/Home'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAxios,axios)
/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    components: {
        Home,
    },
    template: '<Home/>'
})
