import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		currentPath: '',
	},
	mutations: {
		/**
		 * 记录当前路由
		 * @param  {[type]} state   [description]
		 * @param {[type]}  info    [description]
		 */
		recordCurrentPath(state, info) {
			state.currentPath = info
		}
	}
});


export default store;