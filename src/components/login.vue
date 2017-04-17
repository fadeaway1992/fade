<template>
	<div class="bg">
		<div class="slogan"><span>Welcome to</span><span>fade</span></div>
		<div class="login" @keyup.enter="login(user,psw)">
			<div class="alert alert-warning"  v-show="stateAlert.empty">用户名与密码不能为空</div>
			<div class="alert alert-warning"  v-show="stateAlert.existAlready">用户名已经存在</div>
			<div class="alert alert-success"  v-show="stateAlert.suc">注册成功</div>
			<div class="alert alert-warning"  v-show="stateAlert.cantfind">用户名不存在</div>
			<div class="alert alert-warning"  v-show="stateAlert.pswwrong">密码错误</div>
			<span>用户名</span><input class="form-control" id="username" type="text" minlength="1" maxlength="15" size="small" v-model="user" @focus="resetStateAlert"></input>
			<br><br>
			<span>密&nbsp;&nbsp;&nbsp;码</span><input class="form-control" id="password" type="password" minlength="1" maxlength="15" size="small" v-model="psw" @focus="resetStateAlert"></input>
			<br><br>
			<button class="btn btn-default" type="button" @click="login(user,psw)">登陆</button>
			<button class="btn btn-default" type="button" @click="register(user,psw)">注册</button>
		</div>
	</div>
</template>

<script>

	import {mapState, mapMutations} from 'vuex'

	export default {
		data () {
			return {
				//注册与登陆状态提示
				stateAlert:{
					empty:false,
					existAlready:false,
					suc:false,
					cantfind:false,
					pswwrong:false
				},
				user: '',
				psw: ''
			}
		},
		computed:{
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
				'saveUserNumber'
			]),
			register (username, password) {
				if(username===''||password===''){
					this.stateAlert.empty=true
					return
				}
				if(this.exist(username)){
					this.stateAlert.existAlready=true
					this.resetInputBox()
					return
				}
				this.db.users.push({'username':username, 'password':password,twis:[],follow:[],followers:[]})
				this.saveDB(this.db)
				this.resetInputBox()
				this.stateAlert.suc=true
			},
			exist (username) {
				for(let i in this.db.users){
					if(this.db.users[i]['username'] === username){
						return true
					}
				}
				return false
			},
			login (username, password) {
				if( !this.exist(username) ){
					this.stateAlert.cantfind=true
					this.resetInputBox()
					return
				}
				for(let i in this.db.users){
					if(this.db.users[i]['username'] === username){
						if(this.db.users[i]['password'] === password){
							this.resetInputBox()
							let currentUser = this.db.users[i]
							this.saveUser(currentUser)
							this.saveUserNumber(i)
							this.$router.push({name:'home',params:{id:username}})
							return
						}else{
							this.stateAlert.pswwrong=true
							this.resetInputBox()
							return
						}
					}
				}
			},
			resetStateAlert () {
				this.stateAlert.empty=false
				this.stateAlert.existAlready=false
				this.stateAlert.suc=false
				this.stateAlert.cantfind=false
				this.stateAlert.pswwrong=false
			},
			resetInputBox(){
				this.user = ''
				this.psw = ''
			}
		},
		mounted:function(){
			this.initDB()
		}
	}
</script>

<style scoped>
	*{
		padding:0; margin:0;
	}
	.bg{
		width:100vw; height:150vh;
		background: #1F2D3D url('../assets/bg.jpg') no-repeat scroll top center;
		background-size:100%;
	}
	#username,#password{
		width: 15.5em;
		vertical-align: middle;
		padding-left: 10px;
	}
	.login>span{
		display:inline-block;
		width:3em;
		font-weight:bold;
		font-family: "Microsoft YaHei","微软雅黑",Arial;
		color:#fff;
	}
	.login{
		position:fixed;
		right:10%;
		top:50%; transform:translate(0,-50%);
	}
	.btn{
		width:4.5em;height:2em;
		margin-left:3.5em;margin-top:0.5em;
	}
	.slogan{
		position:fixed;
		left:2em; top:2em;
		font-size:2em;
		color:#E5E9F2;
	}
	.slogan>span:first-child{
		font-size:1em;
	}
	.slogan>span:last-child{
		font-size:1.5em;
		padding-left:0.5em;
		font-weight:bold;
		letter-spacing: 3px;
	}
	.alert{
		height:2em;
		line-height:2em;
		margin-bottom: 1em;
	}
</style>
