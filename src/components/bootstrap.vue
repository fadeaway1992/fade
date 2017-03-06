<template>
<div class="navi">
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
			    <small>语言：</small>
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
</template>


<script>
	
</script>



<style lang="sass" scoped>
	.navi{
		width:100%;height:100%;
		padding-top:45px;
		background: url('../assets/bg.jpg') no-repeat fixed top center;
		background-size:100%;
		background-clip: content-box;
		.navbar{
			border-bottom:1px solid rgba(0,0,0,0.05);
			background-color:#fff;
			min-height: 46px;
			.homeAndAbout{
				float:left;
				margin-bottom:0;
				.about{
					padding:0 0 0 10px;
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
							color:rgb(102, 117, 127);
						}
					}
				}
			}
			.dropdown{
				float:right;
				margin:15px 30px 0 0;
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
						margin-right:-4px;
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