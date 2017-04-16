<template>
	<div class="profile">
		<div class="board">
			<p class="user"><i class="el-icon-date"></i><br><span>用户名：</span>{{$route.params.id}}</p>
			<div class="showBtn"v-show="!isCurrent">
				<button class="btn btn-default" v-if="followAlready" @click="unfollow()">取消关注</button>
				<button class="btn btn-default" v-else @click="follow()">关注Ta</button>
			</div>
			<p class="followInfo"><span v-if="isCurrent">我</span><span v-else>他</span>关注<span class="number" @click="showFollow=!showFollow">{{pageOwner.follow.length}}</span>人</p>
			<p class="followInfo"><span class="number" @click = "showFollowers=!showFollowers">{{pageOwner.followers.length}}</span>人关注<span v-if="isCurrent">我</span><span v-else>他</span></p>
			<div class="followBox">
				<ul class="follow" v-show="showFollow">
					<li v-for="item in pageOwner.follow">
						<a @click="goThere($event)">{{item}}</a>
					</li>
				</ul>
				<ul class="follower" v-show="showFollowers">
					<li v-for="(item, index) in pageOwner.followers" :key="item">
						<a @click="goThere($event)">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="cardBox">
			<div v-for="item in twisArray" class="item">
	    	<span class="users">{{item.username}}:</span>
	    	<p class="content"><span class="quoteLeft"></span>{{item.content}}</p>
	    	<span class="quoteRight"></span>
	    	<span class="date">{{turnToDate(item.date)}}</span>
	  	</div>
		</div>
	</div>
</template>

<script>

	import {mapState, mapMutations} from'vuex'
	import {bubbleSort,turnToDate} from '../assets/js/tool.js'

	export default {
		data () {
			return {
				isCurrent:'',  // 标记当前主页是否为当前登录用户的主页
				followAlready:'', // 标记是否已经关注该用户
				showFollow:false,
				showFollowers:false,
				twisArray:''
			}
		},
		computed: {
			...mapState([
				'db',
				'currentUser',
				'userNumber',
				'pageOwner'
			])
		},
		methods:{
			...mapMutations([
				'initDB',
				'saveDB',
				'saveUser',
				'initUser',
				'saveUserNumber',
				'initUserNumber',
				'getPageOwner'
			]),
			goThere (event) {
				this.$router.push({name:'profile',params:{id:event.target.textContent}})
			},
			turnToDate (date) {
				return turnToDate(date)
			},
			follow () {
				this.currentUser.follow.push(this.pageOwner.username)
				this.db.users[this.userNumber] = this.currentUser
				this.pageOwner.followers.push(this.currentUser.username)
				this.db.users[sessionStorage.OwnerNumber] = this.pageOwner
				this.saveUser(this.currentUser)
				this.saveDB(this.db)
				this.followAlready = true
			},
			unfollow:function () {
				let index = this.currentUser.follow.indexOf(this.pageOwner.username)
				this.currentUser.follow.splice(index,1)
				this.db.users[this.userNumber] = this.currentUser
				index = this.pageOwner.followers.indexOf(this.currentUser.username)
				this.pageOwner.followers.splice(index, 1)
				this.db.users[sessionStorage.OwnerNumber] = this.pageOwner
				this.saveUser(this.currentUser)
				this.saveDB(this.db)
				this.followAlready = false
			}
		},
		mounted:function () {
			this.initDB()
			this.initUser()
			this.initUserNumber()
			this.getPageOwner(this.$route.params.id)
			this.twisArray = bubbleSort(this.pageOwner.twis)
			if(this.pageOwner.username === this.currentUser.username){
				this.isCurrent=true
				this.followAlready=false
			}else{
				this.isCurrent=false
				console.log(this.currentUser)
				for(let i=0;i<this.currentUser.follow.length;i++){
					if(this.pageOwner.username === this.currentUser.follow[i]){
						this.followAlready=true
						break
					}
				}
				this.followAlready===true?this.followAlready=true:this.followAlready=false
			}
		},
		beforeRouteUpdate (to, from, next) {
    	next()
    	this.$router.go(0)
  	}
	}
</script>

<style>
	.board{
		position:absolute;
		right:5em;
		top:5em;
		width:20vw;
		height:20vw;
		padding:2em;
		box-sizing: border-box;
		background:linear-gradient(to bottom,#F9FAFC, #FFFFFF);
		border:1px solid #F9FAFC;
		box-shadow:0px 0px 5px #888888
	}
	.user{
		line-height: 1.5em;
		font-size:20px;
		text-align:center;
		padding-bottom: 1em;
	}
	.user>span{
		font-size:16px;
		padding: 1em;
	}
	.showBtn{
		width:100%;
	}
	.showBtn button{
		display:block;
		background:#475669;
		border-color:#475669;
		margin:0 auto;
	}
	.showBtn button:hover{
		background:#324057;
		border-color:#324057;
	}
	.followInfo{
		padding:1em;
		text-align: center;
	}
	.followInfo>.number{
		padding:0 4px;
		font-weight:bold;
		cursor:pointer;
		color:#475669;
	}
	.followBox{
		width:100%;
		position:absolute;
		bottom:-2em;
		left:0em;
	}
/*	.followBox ul li{
		line-height:1.5em;
	}*/
	.followBox>.follow{
		position:absolute;
		left:0;
	}
	.followBox a{
		color:#475669;
		cursor:pointer;
		line-height:1.5em;
	}
	.followBox>.follower{
		position:absolute;
		right:0;
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
