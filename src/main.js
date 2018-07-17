import Vue from 'vue';
import App from './App';
import router from './router';

import '@/assets/js/rem.js';
import '@/assets/style/common.scss';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
