<template>
	<div class="header">
		<div class="nav">
			<span class="hello">
			Hello,
			</span>
			<router-link :to="{name:'home'}">{{currentUser.username}}</router-link>
			<button class="btn btn-primary logout" @click="logout()">退出登录</button>
			<router-link :to="{name:'profile',params:{id:currentUser.username}}">我的主页</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				currentUser:''
			}
		},
		methods:{
			logout:function(){
				sessionStorage.clear()
				this.$router.push({name:'login'})
			}
		},
		mounted:function(){
			initDB()
			initCache()
			this.currentUser = currentUser
		}
	}
</script>

<style scoped>
	.nav{
		width:100%;
		height:4em;
		font-size:1em;
		background: #475669;
		color:#F9FAFC;
	}
	.nav .hello{
		font-size:1em;
		line-height:4em;
		padding-left:4em;
		float:left;
	}
	.nav>a:first-of-type{
		text-decoration: underline;
		float:left;
		font-size:1em;
		line-height:4em;
		color:#F9FAFC;
		padding:0 10px;
	}
	.nav>a:first-of-type:hover{
		background:#324057;
	}

	.nav .logout{
		float:right;
		font-size:1em;
		margin-right:5em; margin-top:1.2em;

	}
	.nav>a:last-of-type{
		text-decoration: underline;
		float:right;
		font-size:1em;
		line-height:4em;
		color:#F9FAFC;
		margin-right:5em;
		padding:0 10px;
	}
	.nav>a:last-of-type:hover{
		background:#324057;
	}


</style>
