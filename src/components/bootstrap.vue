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
		        <ul id="supported_languages" tabindex="-1" role="menu" aria-labelledby="menu-0" aria-hidden="false">
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="zh-tw" title="繁体中文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">繁體中文</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ja" class="js-language-link js-tooltip" rel="noopener" role="menuitem" data-original-title="日文">日本語</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="id" title="印度尼西亚文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Bahasa Indonesia</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="msa" class="js-language-link js-tooltip" rel="noopener" role="menuitem" data-original-title="马来文">Bahasa Melayu</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ca" class="js-language-link js-tooltip" rel="noopener" role="menuitem" data-original-title="加泰罗尼亚文">Català</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="cs" title="捷克文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Čeština</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="da" class="js-language-link js-tooltip" rel="noopener" role="menuitem" data-original-title="丹麦文">Dansk</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="de" title="德文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Deutsch</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="en" class="js-language-link js-tooltip" rel="noopener" role="menuitem" data-original-title="英文">English</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="en-gb" title="英式英文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">English UK</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="es" title="西班牙文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Español</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="fil" title="菲律宾文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Filipino</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="fr" title="法文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Français</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="hr" title="克罗地亚文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Hrvatski</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="it" title="意大利文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Italiano</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="hu" title="匈牙利文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Magyar</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="nl" title="荷兰文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Nederlands</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="no" title="挪威文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Norsk</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="pl" title="波兰文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Polski</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="pt" title="葡萄牙文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Português</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ro" title="罗马尼亚文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Română</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="sk" title="斯洛伐克文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Slovenčina</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="fi" title="芬兰文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Suomi</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="sv" title="瑞典文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Svenska</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="vi" title="越南文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Tiếng Việt</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="tr" title="土耳其文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Türkçe</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="el" title="希腊文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Ελληνικά</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="bg" title="保加利亚文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Български език</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ru" title="俄文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Русский</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="sr" title="塞尔维亚文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Српски</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="uk" title="乌克兰文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">Українська мова</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="he" title="希伯来文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">עִבְרִית</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ar" title="阿拉伯文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">العربية</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="fa" title="波斯文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">فارسی</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="mr" title="马拉地文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">मराठी</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="hi" title="印地文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">हिन्दी</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="bn" title="孟加拉文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">বাংলা</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="gu" title="古吉拉特文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">ગુજરાતી</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ta" title="泰米尔文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">தமிழ்</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="kn" title="卡纳达文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">ಕನ್ನಡ</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="th" title="泰文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">ภาษาไทย</a></li>
		            <li role="presentation"><a href="javascript:void(0);" data-lang-code="ko" title="韩文" class="js-language-link js-tooltip" rel="noopener" role="menuitem">한국어</a></li>
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
			console.log($bg)
			setInterval(()=>{
				if(i==4) i = 0
					else i += 1
				$bg.children().css("opacity","0")
				$bg.children().eq(i).css("opacity","1")
			},9000)
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
			background:white;
			border:1px solid #e1e8ed;
			border-radius:4px;
			margin-bottom:11px;
			.form{
				margin:12px 12px 6px;
				// .field{
				// 	::-webkit-input-placeholder { /* WebKit browsers */
				// 			color:    black;
				// 	}
				// 	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
				// 			color:    black;
				// 	}
				// 	::-moz-placeholder { /* Mozilla Firefox 19+ */
				// 			color:    black;
				// 	}
				// 	:-ms-input-placeholder { /* Internet Explorer 10+ */
				// 			color:    black;
				// 	}
				//
				// }
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
