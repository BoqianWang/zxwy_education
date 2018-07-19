import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath.js';

Vue.use(Router)

export default new Router({
  routes: [
    ...routerPath
  ],
  scrollBehavior(to, from , savedPosition) {
  	 return { x: 0, y: 0}
  }
})
