const index = r => require.ensure([], () => r(require('@/page/home/index.vue')), 'index');
const home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'home');

const search = r => require.ensure([], () => r(require('@/page/home/children/search.vue')), 'search');
const location = r => require.ensure([], () => r(require('@/page/home/children/location.vue')), 'location');
const my = r => require.ensure([], () => r(require('@/page/my/my.vue')), 'my');

const courseList =  r => require.ensure([], () => r(require('@/page/courseList/courseList.vue')), 'courseList');

const courseDetail =  r => require.ensure([], () => r(require('@/page/courseList/courseDetail.vue')), 'courseDetail');

const shopCart =  r => require.ensure([], () => r(require('@/page/pay/shopCart.vue')), 'shopCart');
const paySuccess = r => require.ensure([], () => r(require('@/page/pay/paySuccess.vue')), 'paySuccess');

const orderList = r => require.ensure([], () => r(require('@/page/order/orderList.vue')), 'orderList');
const orderDetail = r => require.ensure([], () => r(require('@/page/order/orderDetail.vue')), 'orderDetail');

const free = r => require.ensure([], () => r(require('@/page/free/free.vue')), 'free');

const login = r => require.ensure([], () => r(require('@/page/login/login.vue')), 'login');

const register = r => require.ensure([], () => r(require('@/page/login/register.vue')), 'register');

const authent = r => require.ensure([], () => r(require('@/page/login/nameAuthent.vue')), 'authent');

let routerPath = [
   {
	   path: '/',
	   redirect: '/index'
   },
   {
      path: '/index',
      component: index,
      children: [
         {
            path: '/index',
            redirect: '/home'
         },
         {
            path: '/home',
            component: home,
            meta: {
               title: '首页'
            }
         },
         {
            path: '/my',
            component: my,
            meta: {
               title: '我的'
            }
         }
      ]
   },
   {
      path: '/index/search',
      component: search,
      meta: {
         title: '搜索'
      }
   },
   {
      path: '/index/location',
      component: location,
      meta: {
         title: '定位城市'
      }
   },
   {
      path: '/courseList',
      component: courseList,
      meta: {
         title: '课程列表'
      }
   },
   {
      path: '/courseList/courseDetail',
      component: courseDetail,
      meta: {
         title: '课程详情'
      }
   },
   {
      path: '/shopCart',
      component: shopCart,
      meta: {
         title: '购物车'
      }
   },
   {
      path: '/shopCart/paySuccess',
      component: paySuccess,
      meta: {
          title: '支付成功'
      }

   },
   {
      path: '/orderList',
      component: orderList,
      meta: {
         title: '订单列表'
      }
   },
   {
      path: '/orderList/orderDetail',
      component: orderDetail,
      meta: {
         title: '订单列表'
      }
   },
   {
      path: '/free',
      component: free,
      meta: {
         title: '免费权益'
      }
   },
   {
      path: '/login',
      component: login,
      meta: {
         title: '登录'
      }
   },
   {
      path: '/register',
      component: register,
      meta: {
         title: '新用户登录'
      }
   },
   {
      path: '/authent',
      component: authent,
      meta: {
         title: '实名认证'
      }
   }
];

export default routerPath;
