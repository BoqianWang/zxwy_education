const home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'home');

let routerPath = [
   {
   	   path: '/',
   	   redirect: '/home'
   },
   {
   	   path: '/home',
   	   component: home,
   	   meta: {
   	   	  title: '首页'
   	   }
   }
];

export default routerPath;