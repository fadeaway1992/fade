<template>
	<div class="home">
		<div id="twiBox">
			<textarea class="form-control" rows="4" placeholder="写点啥吧？" id="twitter" v-model="twi"></textarea>
			<button class="btn btn-default post" @click="twit()">推</button>
		</div>
		<div class="cardBox">
			<div v-for="item in renderArray" class="item">
	    	<router-link class="users" :to="{name:'profile',params:{id:item.username}}">{{item.username}}:</router-link>
	    	<p class="content"><span class="quoteLeft"></span>{{item.content}}</p>
	    	<span class="quoteRight"></span>
	    	<span class="date">{{turnToDate(item.date)}}</span>
	  	</div>
		</div>
	</div>
</template>


<script>

	import {mapState, mapMutations} from 'vuex'
	import {bubbleSort,turnToDate} from '../assets/js/tool.js'

	export default {
		data () {
			return {
				renderArray:'',
				twi:''
			}
		},
		computed: {
			...mapState([
				'db',
				'currentUser',
				'userNumber'
			])
		},
		methods:{
			...mapMutations([
				'initDB',
				'saveDB',
				'saveUser',
				'initUser',
				'saveUserNumber',
				'initUserNumber'
			]),
			twit () {
				//{date:'',content:'',time:''}
				let date = new Date().getTime()
				let content = this.twi
				let username = this.currentUser.username
				this.currentUser.twis.push({date,content,username})
				this.db.users[this.userNumber] = this.currentUser
				this.saveUser(this.currentUser)
				this.saveDB(this.db)
				this.twi = ''
				this.getRenderArray()
			},
			turnToDate (date) {
				return turnToDate(date)
			},
			getRenderArray () {
				let renderArray = this.currentUser.twis
				for(let i=0; i < this.currentUser.follow.length; i++){
					for(let j=0; j < this.db.users.length; j++){
						if(this.db.users[j].username === this.currentUser.follow[i]){
							renderArray = renderArray.concat(this.db.users[j].twis)
							break
						}
					}
				}
				this.renderArray =  bubbleSort(renderArray)
			}
		},
		mounted () {
			this.initDB()
			this.initUser()
			this.initUserNumber()
			this.getRenderArray()
		}
	}
</script>

<style scoped>
	#twiBox{
		position:absolute;
		width:30%;
		right:5em;
		top:5em;
	}
	#twitter{
		width:100%;
	}
	.post{
		display:block;
		float:right;
		margin-top:1em;
		font-family:"Microsoft YaHei","微软雅黑",Arial;
	}
	.cardBox{
		width:60%;
		margin:1em;
	}
	.item{
		padding:2em 1em;
		font-size:16px;
		border-bottom: 1px solid #EFF2F7;
		overflow: hidden;
	}
	.users{
		text-decoration: none;
		color:#1D8CE0;
	}
	.date{
		display:block;
		font-size:14px;
		float:right;
		clear:both;
	}
	.quoteLeft,.quoteRight{
		display:inline-block;
		width:2em; height:2em;
		padding:1em;
	}
	.quoteLeft{
		background:url("../assets/quoteLeft.png") no-repeat center;
		vertical-align: text-bottom;
		background-size: 100%;
		background-origin:content-box;
	}
	.quoteRight{
		display:block;
		background:url("../assets/quoteRight.png") no-repeat center;
		vertical-align: text-top;
		background-size: 100%;
		background-origin:content-box;
		margin-right:1em;
		float:right;
	}
</style>
