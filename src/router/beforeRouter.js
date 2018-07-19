import router from '../router/index.js';
import store from '../store/index.js';
import vue from 'vue';

router.beforeEach((to, from, next) => {
	store.commit('recordCurrentPath', to.path);
	console.log(to);
	next();
});