import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath.js';

Vue.use(Router)

export default new Router({
  routes: [
    ...routerPath
  ]
})
