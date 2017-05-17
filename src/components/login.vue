<template>
<div class="wrap-all">
	<div class="navi">
		<div class="bg">
			<img class="show" src="../assets/bg.png" alt="">
			<img src="../assets/bg2.png" alt="">
			<img src="../assets/bg3.jpg" alt="">
			<img src="../assets/bg4.jpg" alt="">
			<img src="../assets/bg5.png" alt="">
		</div>
		<nav class="navbar navbar-default navbar-fixed-top">
	  	<div class="contain flex-width">
		    <ul class="homeAndAbout" role="navigation">
				  <li class="home">
				    <a href="/">
				      <span class="fa fa-twitter" aria-hidden="true"></span>
				      <span class="text">主页</span>
				    </a>
				  </li>
			    <li class="about">
			      <a href="javascript:void(0);">
			        <span class="text">关于</span>
			      </a>
			    </li>
				</ul>
				<div class="dropdown">
				  <a class="dropdown-toggle" id="languageSelection" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				    <small>语言: </small>
				    <span>简体中文</span>
				    <b class="caret"></b>
				  </a>
				  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languageSelection">
		        <div class="dropdown-caret right">
		          <span class="caret-outer"> </span>
		          <span class="caret-inner"></span>
		        </div>
		        <ul id="supported_languages">
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="繁体中文">繁體中文</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="日文">日本語</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="印度尼西亚文">Bahasa Indonesia</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="马来文">Bahasa Melayu</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="加泰罗尼亚文">Català</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="捷克文">Čeština</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="丹麦文">Dansk</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="德文">Deutsch</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="英文">English</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="英式英文">English UK</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="西班牙文">Español</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="菲律宾文">Filipino</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="法文">Français</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="克罗地亚文">Hrvatski</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="意大利文">Italiano</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="匈牙利文">Magyar</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="荷兰文">Nederlands</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="挪威文">Norsk</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="波兰文">Polski</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="葡萄牙文">Português</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="罗马尼亚文">Română</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="斯洛伐克文">Slovenčina</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="芬兰文">Suomi</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="瑞典文">Svenska</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="越南文">Tiếng Việt</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="土耳其文">Türkçe</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="希腊文">Ελληνικά</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="保加利亚文">Български език</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="俄文">Русский</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="塞尔维亚文">Српски</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="乌克兰文">Українська мова</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="希伯来文">עִבְרִית</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="阿拉伯文">العربية</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="波斯文">فارسی</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="马拉地文">मराठी</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="印地文">हिन्दी</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="孟加拉文">বাংলা</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="古吉拉特文">ગુજરાતી</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="泰米尔文">தமிழ்</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="卡纳达文">ಕನ್ನಡ</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="泰文">ภาษาไทย</a></li>
		            <li><a href="javascript:void(0);" data-toggle="tooltip" title="韩文">한국어</a></li>
		        </ul>
	        </div>
				</div>
	 	 	</div>
		</nav>
	</div>
	<div class="content">
		<div class="welcome-text">
			<h1>欢迎使用 Twitter。</h1>
			<p>联系你的好友和更多精彩。获取你感兴趣的实时更新。并通过每个视角观看事件实时呈现。</p>
		</div>
		<div class="img-info">
			<div class="info-item" v-show="textNumber==0">
				<p class="text"><a href="#">@GoldenStateWarriors 2017,let's go make that old.#GSW #Strength in Numbers</a></p>
				<p class="post-user"><a href="#">by @Iguodala</a></p>
				<a href="#">11:54 AM - Apr 2017</a>
			</div>
			<div class="info-item" v-show="textNumber==1">
				<p class="text"><a href="#">Hunt, or be hunted? Obsession Is Natural #Mamba #NBA1996</a></p>
				<p class="post-user"><a href="#">by @KobeBryant</a></p>
				<a href="#">04:09 AM - Apr 2017</a>
			</div>
			<div class="info-item" v-show="textNumber==2">
				<p class="text"><a href="#">holiday, yeh! but still have to feed the little girl.(photo by @Aysha)</a></p>
				<p class="post-user"><a href="#">by @StephenCurry</a></p>
				<a href="#">11:44 AM - Apr 2017</a>
			</div>
			<div class="info-item" v-show="textNumber==3">
				<p class="text"><a href="#">I've done so many incredible things that I can not dout myself. #ANTA #GoldenStateWarriors</a></p>
				<p class="post-user"><a href="#">by @Kley</a></p>
				<a href="#">08:11 PM - Apr 2017</a>
			</div>
			<div class="info-item"  v-show="textNumber==4">
				<p class="text"><a href="#">I once was lost, but now i'm found. >< #Strength in Numbers</a></p>
				<p class="post-user"><a href="#">by @StephenCurry</a></p>
				<a href="#">11:53 PM - Apr 2017</a>
			</div>
		</div>
		<div class="card-signin">
			<div class="form">
				<div class="username field">
					<input class="form-control" type="text" autocomplete="new-password" autofocus="autofocus" placeholder="手机、邮件地址或用户名" v-model="user" @focus="resetStateAlert">
				</div>
				<div class="psd field">
					<input class="form-control" type="password" autocomplete="new-password" placeholder="密码" v-model="psw" @focus="resetStateAlert" @keyup.enter="login(user,psw)">
					<button type="button" class="btn btn-primary" @click="login(user,psw)">登录</button>
				</div>
				<div class="remember-forgot">
					<label class="remember-me">
						<input type="checkbox" name="remenber_me" checked="checked">
						<span>记住我</span>
					</label>
					<span class="separator">·</span>
					<a class="forgot" href="#" rel="noopener">忘记密码?</a>
				</div>
			</div>
		</div>
		<div class="card-signup">
			<h2><strong>新来 Twitter?</strong> 注册</h2>
			<div class="form">
				<div class="field">
					<input type="text" class="form-control full-name" autocomplete="new-password" placeholder="全名" v-model="signUser" @focus="resetStateAlert">
				</div>
				<div class="field">
					<input type="text" class="form-control email" autocomplete="new-password" placeholder="邮件地址" v-model="fullName" @focus="resetStateAlert">
				</div>
				<div class="field">
					<input type="password" class="form-control password" autocomplete="new-password" placeholder="密码" v-model="signPsw" @focus="resetStateAlert">
				</div>
				<button type="button" class="btn" @click="register(signUser,signPsw)">注册 Twitter</button>
			</div>
		</div>
		<div class="state-alert">
			<div class="alert alert-warning"  v-show="stateAlert.empty">用户名与密码不能为空</div>
			<div class="alert alert-warning"  v-show="stateAlert.existAlready">用户名已经存在</div>
			<div class="alert alert-success"  v-show="stateAlert.suc">注册成功</div>
			<div class="alert alert-warning"  v-show="stateAlert.cantfind">用户名不存在</div>
			<div class="alert alert-warning"  v-show="stateAlert.pswwrong">密码错误</div>
		</div>
	</div>
	<div class="footer">
		<ul>
			<li><a href="#">关于</a></li>
			<li><a href="#">帮助中心</a></li>
			<li><a href="#">博客</a></li>
			<li><a href="#">状态</a></li>
			<li><a href="#">工作机会</a></li>
			<li><a href="#">条款</a></li>
			<li><a href="#">隐私政策</a></li>
			<li><a href="#">Cookies</a></li>
			<li><a href="#">广告信息</a></li>
			<li><a href="#">商标</a></li>
			<li><a href="#">广告</a></li>
			<li><a href="#">企业</a></li>
			<li><a href="#">开发者</a></li>
			<li><a href="#">目录</a></li>
			<li><span>© 2017 Twitter</span></li>
		</ul>
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
				textNumber:0,
				user:'',
				psw:'',
				signUser:'',
				signPsw:'',
				fullName:''
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
				this.signUser = ''
				this.signPsw = ''
				this.fullName = ''
			}
		},
		created () {
			this.$nextTick(function(){
				//设置背景颜色
				let body = document.getElementsByTagName('body')[0]
        body.style.backgroundColor="#555"
				document.title = `fade`
			})
		},
		mounted () {
			this.initDB()
			this.$nextTick(function(){
				let $bg = $('.bg')
				let i = 0
				$bg.children().eq(0).css("opacity","1")
				setInterval(()=>{
					if(i==4) i = 0
						else i += 1
					this.textNumber = i
					$bg.children().css("opacity","0").removeClass('show')
					$bg.children().eq(i).css("opacity","1").addClass('show')
				},9000)

				let self = this
				let bgShowing = document.querySelector('.show')
				console.log(bgShowing)
				bgShowing.onload=function(){  // onload 时才能获取到图片到尺寸。

					//监听浏览器宽高变化，使背景图片自适应。
					window.onresize = ()=>{
						console.log('im resizing')
						let bg = document.querySelector('.show')
						let h = bg.offsetHeight + 45
						let w = bg.offsetWidth
						if(h < window.innerHeight){
							$('.bg>img').css({'height':'100%','width':'auto'})
						}else if(w < window.innerWidth){
							$('.bg>img').css({'width':'100%','height':'auto'})
						}
					}

					window.onresize()  //页面加载时先执行一次，使背景图片自适应。
				}



				$('[data-toggle="tooltip"]').tooltip({delay:{"show":500,"hide":100}})
			})
		}
	}
</script>



<style lang="scss" scoped>
	.wrap-all{
		width:100%;height:690px;
		overflow:scroll;
		position:relative;
	}
	.content{
		position:relative;
		//background:rgba(255,255,255,0.4);
		width:838px;
		height:410px;
		//top:50%;
		//left:50%;
		margin:117px auto 0 auto;
		//transform:translate(-50%,-50%);
		.welcome-text{
			width:500px;
			float:left;
			h1{
				color: #fff;
				font-size:38px;
				line-height:44px;
				margin-bottom:30px;
				font-weight:700;
				margin-top:0;
			}
			p{
				color:#fff;
				font-size:21px;
				line-height:31px;
				font-weight:300;
			}
		}
		.img-info{
			position:absolute;
			left:0; bottom:70px;
			width:400px;
			.info-item{
				position:absolute;
				left:0;top:0;
				font-size:14px;
				line-height:18px;
				color:#fff;
				a{
					color:#fff;
					text-decoration: underline;
				}
				.text{
					margin-bottom:20px;
					a{
						text-decoration: none;
						&:hover{
							text-decoration: underline;
						}
					}
				}
				.post-user{
					margin-bottom:7px;
				}
			}
		}
		.card-signin{
			float:right;
			width:300px;
			box-sizing: content-box;
			background:white;
			border:1px solid #e1e8ed;
			border-radius:4px;
			margin-bottom:11px;
			.form{
				margin:12px 12px 6px;
				.field{
					::-webkit-input-placeholder { /* WebKit browsers */
							color: #687988;
					}
					:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
							color: #687988;
					}
					::-moz-placeholder { /* Mozilla Firefox 19+ */
							color: #687988;
					}
					:-ms-input-placeholder { /* Internet Explorer 10+ */
							color: #687988;
					}

				}
				.field{
					input{
						width:266px;height:20px;
						padding:4px;
						box-sizing: content-box;
						font-size:13px;
						line-height:20px;
						color:rgb(20,23,26);
					}
					input:focus{
						background-color:#fff;
					}
				}
				.username{
					padding-bottom:15px;
				}
				.psd{
					input{
						width:194px;
						float:left;
					}
					.btn{
						margin-left: 8px;
						font-weight:bold;
						line-height:14px;
						padding:7px 16px;
						background-color:#1da1f2;
						border:1px solid #3b88c3;
						&:focus{
							outline:none;
						}
					}
				}
				.remember-forgot{
					margin-top:4px;
					.remember-me{
						margin-bottom:0;
						font-size:12px;
						line-height:20px;
						cursor:pointer;
						input{
							margin:0;
							vertical-align: baseline;
							height:13px;
						}
						span{
							font-size:12px;
							line-height:20px;
							color:#657786;
							font-weight:lighter;
						}
					}
					.separator{
						margin:0 1px 0 2px;
					}
					.forgot{
						color:#1b95e0;
						font-size:12px;
						line-height:13px;
					}
				}
			}
		}
		.card-signup{
			width:300px; height:206px;
			float:right;
			//clear:both;
			background:white;
			border:1px solid #e1e8ed;
			border-radius:4px;
			box-sizing: content-box;
			h2{
				margin:0 0 12px 0;
				padding:10px 12px;
				font-size:16px;
				color:#66757f;
				line-height:22px;
				font-weight:300;
				border-bottom:1px solid #e6ecf0;
				strong{
					color:#14171a;
					font-weight:500;
				}
			}
			.form{
				.field{
					display:block;
					margin:6px auto;
					width:276px;
					font-size:12px;
					input{
						width:266px;
						height:20px;
						box-sizing: content-box;
						font-size:13px;
						line-height:20px;
						padding:4px;
					}
					::-webkit-input-placeholder { /* WebKit browsers */
						color: #687988;
					}
					:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
						color: #687988;
					}
					::-moz-placeholder { /* Mozilla Firefox 19+ */
						color: #687988;
					}
					:-ms-input-placeholder { /* Internet Explorer 10+ */
						color: #687988;
					}
				}
				.btn{
					float:right;
					padding:8px 12px;
					margin:1px 12px 0;
					height:30px;
					line-height:11px;
					font-weight:bold;
					border:1px solid #f1a02a;
					background-image:linear-gradient(#ffcc4d, #ffad1f);
					color:#14171a;
					text-shadow:0 1px 0 rgba(255,255,255,0.5);
					&:focus{
						outline:none;
					}
				}
			}
		}
		.state-alert{
			float:right;
			clear:both;
			.alert{
				width:302px;
				margin:10px 0 0 0;
				padding:10px;
			}
		}
	}
	.navi{
		//width:100%;height:100%;
		// padding-top:45px;
		// background: url('../assets/bg.jpg') no-repeat fixed top center;
		// background-size:100%;
		// background-clip: content-box;
		.bg{
			width:100%;height:100vh;
			padding-top: 45px;
			position:fixed;
			z-index: -100;
			left:0;top:0;
			background: #000;
			img{
				transition:1s;
				position:absolute;
				width:100%;
				//min-height:100vh;
				opacity:0;
			}
			//@media screen and (aspect-ratio:)
		}
		.navbar{
			background-color:#fff;
			height: 46px;
			min-height:46px;
			border-bottom:1px solid rgba(0,0,0,0.15);
			box-sizing: content-box;
			.contain{
				//margin:0;padding:0 45px;
				margin:0 auto;
				box-sizing: border-box;
				//width:100%;
			}
			.homeAndAbout{
				float:left;
				margin-bottom:0;
				padding-left:3px;
				//padding-top:1px;
				.about{
					padding:0 0 0 10px;
				}
				.home{
					padding-left:2px;
					a{
						margin-left: -2px;
					}
				}
				li{
					float:left;
					height:47px;
					line-height:47px;
					transition:0.15s ease-in-out;
					&:hover{
						cursor:pointer;
						border-bottom:5px solid rgb(29, 161, 242);
						a{
							text-decoration:none;
							span{
								color:rgb(29, 161, 242);
							}
						}
					}
					a{
						padding:0 14px 0 4px;
						font-size:13px;
						.fa{
							display:block;
							float:left;
							height: 23px;
							margin-left: 10px;
							margin-top: 11px;
							padding-right: 2px;
							width: 23px;
							color:rgb(29, 161, 242);
							font-size:23px;
							width:25px;
						}
						.text{
							font-weight:500;
							color:rgb(102, 117, 127);
						}
					}
				}
			}
			.dropdown{
				float:right;
				margin:0 30px 0 0;
				cursor:pointer;
				line-height:47px;
				.dropdown-toggle{
					font-size:13px;
					color:rgb(102, 117, 127);
					&:hover{
						text-decoration:none;
						small,span{
							border-bottom:1px solid rgb(29, 161, 242);
							color:rgb(29, 161, 242);
						}
					}
					small{
						font-size:12px;
						margin-right:0px;
						//padding-right:2px;
					}
					span{
						font-weight:500;
					}
				}
				.dropdown-menu{
					width:250px;
					margin-top:9px;
					padding-top:10px;
					color:rgb(102, 117, 127);
					box-shadow:0px 1px 4px rgba(0, 0, 0, 0.25);
					background:#FEFEFE;
					background-clip: padding-box;
					border-left-width:0;
					border-right-width:0;
					right:0;
					left:auto;
					.dropdown-caret{
						position:absolute;
						width:18px; height:10px;
						right:10px; top:-10px;
						.caret-outer{
					 		position:absolute;
					 		width:0;height:0;top:0px;left:0px;
					 		border-bottom:10px solid rgba(0, 0, 0, .2);
					 		border-left:10px solid transparent;
					 		border-right:10px solid transparent;

						}
						.caret-inner{
					 		position:absolute; top:1px; left: 1px;
					 		width:0;height:0;
					 		border-bottom:9px solid #FEFEFE;
					 		border-left:9px solid transparent;
					 		border-right:9px solid transparent;
						}
					}
					#supported_languages{
						max-height:500px;
						overflow:scroll;
						li{
							float:left;
							color:rgb(102, 117, 127);
							width:125px;
							a{
								display:block;
								padding:5px 20px;
								font-size:12px;
								line-height:18px;
								color:rgb(102, 117, 127);
								white-space:nowrap;
								&:hover{
									text-decoration:none;
									background:rgb(59, 136, 195);
									color:rgb(255, 255, 255);
								}
							}
						}
					}
				}
			}
		}
	}
	.footer{
		position:absolute;
		bottom:30px;
		width:100%;
		text-align:center;
		font-size:11px;
		line-height:18px;
		height:18px;
		ul{
			display:inline-block;
			margin:0;
			li{
				display: inline;
				margin-right:6px;
				color:#fff;
				a{
					color:#fff;
					text-decoration:none;
				}
			}
		}
	}
</style>
