import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router/index';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

/* eslint-disable no-new */
export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

