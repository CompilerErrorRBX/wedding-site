import Vue from 'vue';

import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/vuetify';
import './plugins/vueGoogleMaps';

Vue.config.productionTip = false;

const apiHost = process.env.API_HOST || 'localhost';

axios.defaults.baseURL = `http://10.128.0.2:3000/`;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
