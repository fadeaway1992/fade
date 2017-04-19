<template>
<div class="wrap-all">
	<div class="navi">
		<div class="bg">
			<img id="first" src="../assets/bg.jpg"  width="100%" alt="">
			<img src="../assets/bg2.jpg" width="100%" alt="">
			<img src="../assets/bg3.jpg" width="100%" alt="">
			<img src="../assets/bg4.jpg" width="100%" alt="">
			<img src="../assets/bg5.jpeg" width="100%" alt="">
		</div>
		<nav class="navbar navbar-default navbar-fixed-top">
	  	<div class="container">
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
		<div class="card-signin">
			<div class="form">
				<div class="username field">
					<input class="form-control" type="text" autocomplete="new-password" autofocus="autofocus" placeholder="手机、邮件地址或用户名" v-model="username">
				</div>
				<div class="psd field">
					<input class="form-control" type="password" autocomplete="new-password" placeholder="密码" v-model="psd">
					<button type="button" class="btn btn-primary">登录</button>
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
					<input type="text" class="form-control full-name" autocomplete="new-password" placeholder="全名">
				</div>
				<div class="field">
					<input type="text" class="form-control email" autocomplete="new-password" placeholder="邮件地址">
				</div>
				<div class="field">
					<input type="password" class="form-control password" autocomplete="new-password" placeholder="密码">
				</div>
				<button type="button" class="btn">注册 Twitter</button>
			</div>
		</div>
		</div>



	<div class="footer">

	</div>
</div>
</template>


<script>
	export default {
		data () {
			return {
				username:'',
				psd:''
			}
		},
		mounted () {
			let $bg = $('.bg')
			let i = 0
			$bg.children().eq(0).css("opacity","1")
			setInterval(()=>{
				if(i==4) i = 0
					else i += 1
				$bg.children().css("opacity","0")
				$bg.children().eq(i).css("opacity","1")
			},9000)
			$("[data-toggle='tooltip']").tooltip({delay:{"show":500,"hide":100}})
		}
	}
</script>



<style lang="scss" scoped>
	.wrap-all{
		width:100%;height:690px;
		overflow:scroll;
	}
	.content{
		//position:absolute;
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
				}
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
				opacity:0;
			}
		}
		.navbar{
			border-bottom:1px solid rgba(0,0,0,0.05);
			background-color:#fff;
			min-height: 46px;
			.container{
				margin:0;padding:0 45px;
				box-sizing: border-box;
				width:100%;
			}
			.homeAndAbout{
				float:left;
				margin-bottom:0;
				padding-left:3px;
				padding-top:1px;
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
					height:45px;
					line-height:45px;
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
				margin:11px 30px 0 0;
				cursor:pointer;
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
					background:rgba(255, 255, 255, 0.9);
					background-clip: padding-box;
					border-left-width:0;
					border-right-width:0;
					.dropdown-caret{
						position:absolute;
						width:18px; height:10px;
						right:10px; top:-10px;
						.caret-outer{
					 		position:absolute;
					 		width:0;height:0;
					 		border-bottom:10px solid rgba(0, 0, 0, 0.1);
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
</style>
