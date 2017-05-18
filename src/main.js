import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/css/reset.css'
import './assets/css/global.css'

import login from './components/login.vue'
import home from './components/home.vue'
import profile from './components/profile.vue'
import Test from './components/test.vue'
import {store} from './store/index.js'

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
		path:'/test',
		name:'test',
		component:Test
	},
	{
		path:'/:id/home',
		name:'home',
		components:
		{
			default:home
		},
		beforeEnter:(to,from,next) => {
			// 如果未登录，跳转到登陆页面。
			// 如果路由id不是当前登录用户，跳转到主页。
			store.commit('initUser')
			if(store.state.currentUser && to.params.id==store.state.currentUser.username) {
				console.log('可以进入')
				next()
				return
			} else {
				if(!store.state.currentUser) {
					console.log('还没登录')
					alert('请先登录！')
					next({path:'/'})
					return
				}else {
					alert('非当前登录用户')
					next({name:'home',params:{id:store.state.currentUser.username}})
				}
			}
		}
	},
	{
		path:'/:id/profile',
		name:'profile',
		components:
		{
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
				alert('您访问的用户不存在！')
				//next({name:'home',params:{ id: store.state.currentUser.username }})
				next({path:'/'})
			} else {
				//在这里设置“请先登录”的参数
				alert('请先登录')
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
