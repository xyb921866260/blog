import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
			var top;
			if (window.innerWidth >= 700) {
				top = 676
			} else {
				top = 267
			}
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [{
			path: '/',
			component: resolve => require(["../view/Home"], resolve),
			meta: {
				auth: false
			},
			name: 'Home'
		},
		{
			path: '/login',
			component: resolve => require(["../view/Login"], resolve),
			meta: {
				auth: false
			},
			name: 'Login'
		},
		{
			path: '/articleInfo',
			component: resolve => require(["../view/ArticleInfo"], resolve),
			meta: {
				auth: false
			},
			name: 'ArticleInfo'
		}
	]
})
