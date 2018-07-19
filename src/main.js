import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';

import './router/beforeRouter.js';

import '@/assets/js/rem.js';
import '@/assets/style/common.scss';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
