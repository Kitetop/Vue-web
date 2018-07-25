import Vue from 'vue/dist/vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyLogin from 'MyLogin';

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */

new Vue({
    el: '#login',
    router,
    components: {
        MyLogin,
    },
    template: '<App/>'
})
