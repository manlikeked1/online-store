import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {store} from './store/store.js'


Vue.config.productionTip = false;

// Vue.use(BootstrapVue);
Vue.use(VueRouter);

/* eslint-disable no-new */
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
