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
				y: 0
			}
		}
	},
	routes: [{
			path: '/',
			component: resolve => require(["../view/Home"], resolve),
			meta: {
				auth: false
			},
			children:[
				{
					path:'/',
					component: resolve => require(["../components/Index/Index"],resolve),
					name:'Index'
				},
				{
					path:'/articleInfo',
					component: resolve => require(["../components/ArticleInfo/ArticleInfo"],resolve),
					name:'ArticleInfo'
				}
			]
		},
		{
			path: '/sign',
			component: resolve => require(["../view/Sign"], resolve),
			meta: {
				auth: false
			},
			children:[
				{
					path:'/',
					component:resolve =>require(["../components/Login/Login"],resolve),
					name:'Login'
				},
				{
					path:'/sign/register',
					component:resolve =>require(["../components/Register/Register"],resolve),
					name:'Register'
					
				},
				{
					path:'/sign/forgot',
					component:resolve =>require(["../components/Forgot/Forgot"],resolve),
					name:'Forgot'
				}
			]
			
		},
		{
			path: '/writing',
			component: resolve => require(["../view/Writing"], resolve),
			meta: {
				auth: false
			},
			name: 'Writing'
		}
	]
})
