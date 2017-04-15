<template>
	<div class="bg">
		<div class="slogan"><span>Welcome to</span><span>fade</span></div>
		<div class="login" @keyup.enter="login(user,psw)">
			<div class="alert alert-warning" title="用户名与密码不能为空" type="error" v-show="empty"></div>
			<div class="alert alert-warning" title="用户名已经存在" type="error" v-show="existAlready"></div>
			<div class="alert alert-success" title="注册成功" type="success" v-show="suc"></div>
			<div class="alert alert-warning" title="用户名不存在" type="error" v-show="cantfind"></div>
			<div class="alert alert-warning" title="密码错误" type="error" v-show="pswwrong"></div>
			<span>用户名</span><input class="form-control" id="username" type="text" minlength="1" maxlength="15" size="small" v-model="user" @focus="reset"></input>
			<br><br>
			<span>密&nbsp;&nbsp;&nbsp;码</span><input class="form-control" id="password" type="password" minlength="1" maxlength="15" size="small" v-model="psw" @focus="reset"></input>
			<br><br>
			<button class="btn btn-default" type="button" @click="login(user,psw)">登陆</button>
			<button class="btn btn-default" type="button" @click="register(user,psw)">注册</button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				empty:false,
				existAlready:false,
				suc:false,
				cantfind:false,
				pswwrong:false,
				user: '',
				psw: ''
			}
		},
		methods:{
			register : function (username, password) {
				if(username===''||password===''){
					this.empty=true
					return
				}
				if(this.exist(username)){
					this.existAlready=true
					this.user = ''
					this.psw = ''
					return
				}
				db.users.push({'username':username, 'password':password,twis:[],follow:[],followers:[]})
				saveDB()
				initDB()
				this.user = ''
				this.psw = ''
				this.suc=true
			},
			exist : function (username) {
				for(let i in db.users){
					if(db.users[i]['username'] === username){
						return true
					}
				}
				return false
			},
			login : function (username, password) {
				if( !this.exist(username) ){
					this.cantfind=true
					this.user = ''
					this.psw = ''
					return
				}
				for(let i in db.users){
					if(db.users[i]['username'] === username){
						if(db.users[i]['password'] === password){
							this.user = ''
							this.psw = ''
							currentUser = db.users[i]
							saveCache()
							sessionStorage.userNumber = i
							this.$router.push({name:'home'})
						}else{
							this.pswwrong=true
							this.user = ''
							this.psw = ''
							return
						}
					}
				}
			},
			reset:function(){
				this.empty=false
				this.existAlready=false
				this.suc=false
				this.cantfind=false
				this.pswwrong=false
			}
		},
		mounted:function(){
			initDB()
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
