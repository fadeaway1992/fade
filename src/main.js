import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

import login from './components/login.vue'
import home from './components/home.vue'
import profile from './components/profile.vue'
import header from './components/header.vue'
import bootstrap from './components/bootstrap.vue'
import {store} from './store/index.js'

let routes = [
	{
		path:'/',
		name:'login',
		components:
		{
			default:bootstrap
		}
	},
	{
		path:'/:id/home',
		name:'home',
		components:
		{
			header:header,
			default:home
		},
		beforeEnter:(to,from,next) => {
			// 如果未登录，跳转到登陆页面。
			if(store.state.currentUser) {
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

			// 如果未登录,跳转到登陆页面。
			if(store.state.currentUser) {
				store.commit('initDB')
				for(let i=0;i<store.state.db.users.length;i++){
					if(to.params.id===store.state.db.users[i].username){
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
	store,
  el: '#app',
})
