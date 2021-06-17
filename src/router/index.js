import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue')
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	console.log(store)
	next()
	// if (to.path !== '/login' && !store.state.token) {
	// 	next({
	// 		path: '/login'
	// 	})
	// } else {
	// 	next()
	// }
})

export default router
