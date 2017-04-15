import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

import login from './components/login.vue'
import home from './components/home.vue'
import profile from './components/profile.vue'
import header from './components/header.vue'
import bootstrap from './components/bootstrap.vue'

let routes = [
	{
		path:'/',
		name:'login',
		components:
		{
			default:login
		}
	},
	{
		path:'/home',
		name:'home',
		components:
		{
			header:header,
			default:home
		},
		beforeEnter:(to,from,next) => {
			// 如果未登录，跳转到登陆页面。
			if(sessionStorage.currentUser) {
				next()
				return
			} else {
				//在这里设置“请先登录”的参数
				//...
				next({path:'/'})
				return
			}
		}
	},
	{
		path:'/:id',
		name:'profile',
		components:
		{
			header:header,
			default:profile
		},
		beforeEnter:(to,from,next) => {

			// 如果未登录或者登陆的用户与访问的用户主页不一致，跳转到登陆页面。
			if(sessionStorage.currentUser) {
				initDB()
				for(let i=0;i<db.users.length;i++){
					if(to.params.id===db.users[i].username){
						next()
						return
					}
				}
				//在这里设置'您访问的用户不存在'的参数
				//....
				next({path:'/'})

			} else {
				//在这里设置“请先登录”的参数
				//...
				next({path:'/'})
				return
			}
		}
	}
];

let router = new VueRouter({
	mode: 'history',
	routes
})

let vm = new Vue({
	data:{
		a:1
	},
	router,
  el: '#app',
})
