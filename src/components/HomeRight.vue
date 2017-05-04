<template lang="html">
  <div class="home-right-wrap">
    <div class="recommendation">
      <div class="recommend-follow">
        <div class="recommend-header">
          <h3>推荐关注</h3><small>· </small><span class="reload">刷新</span><small>· </small><span class="view-all">查看全部</span>
        </div>
        <div class="recommend-users">
          <div class="user">
            <span class="action-dismiss fa fa-times" aria-hidden="true"></span>
            <div class="content">
              <img class="avatar" src="https://pbs.twimg.com/profile_images/803136239972945920/xLa-JKhg_normal.jpg" alt="">
              <div class="account-info">
                <strong class="full-name">im </strong><span class="username">@isaac</span>
              </div>
              <button type="button" class="follow-btn"><span class="icon fa fa-user-plus" aria-hidden="true"></span><span class="follow-text">关注</span></button>
            </div>
          </div>
          <div class="user">
            <span class="action-dismiss fa fa-times" aria-hidden="true"></span>
            <div class="content">
              <img class="avatar" src="https://pbs.twimg.com/profile_images/1135372297/Screen_shot_2010-10-01_at_2.48.29_PM_normal.png" alt="">
              <div class="account-info">
                <strong class="full-name">John Kalucki </strong><span class="username">@jkalucki</span>
              </div>
              <button type="button" class="follow-btn"><span class="icon fa fa-user-plus" aria-hidden="true"></span><span class="follow-text">关注</span></button>
            </div>
          </div>
          <div class="user">
            <span class="action-dismiss fa fa-times" aria-hidden="true"></span>
            <div class="content">
              <img class="avatar" src="https://pbs.twimg.com/profile_images/684127042611363841/i-5vgHPX_normal.jpg" alt="">
              <div class="account-info">
                <strong class="full-name">Chris Paul </strong><span class="username">@CP3</span>
              </div>
              <button type="button" class="follow-btn"><span class="icon fa fa-user-plus" aria-hidden="true"></span><span class="follow-text">关注</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="import-gmail">
        <div class="import-main">
          <span class="import-icon"></span>
          <p class="import-text"><strong>寻找你认识的人</strong><span>从 Gmail 导入你的联系人</span></p>
        </div>
        <p class="other-location">连接到其它地址簿</p>
      </div>
    </div>
    <div class="foot-links">
      <div class="links">
        <ul class="link-ul">
          <li class="link-li">© 2017 Twitter</li>
          <li class="link-li">关于</li>
          <li class="link-li">帮助中心</li>
          <li class="link-li">条款</li>
          <li class="link-li">隐私政策</li>
          <li class="link-li">Cookies</li>
          <li class="link-li">广告信息</li>
          <li class="link-li">商标</li>
          <li class="link-li">博客</li>
          <li class="link-li">状态</li>
          <li class="link-li">应用</li>
          <li class="link-li">工作机会</li>
          <li class="link-li">企业</li>
          <li class="link-li">开发者</li>
        </ul>
      </div>
      <div class="ads">
        <p class="ads-text">在 Twitter 上投放广告</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .home-right-wrap{
    width:290px;
    color: #14171a;
    font-size: 14px;
    line-height: 18px;
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    .recommendation{
      border-radius:6px;
      line-height:16px;
      margin-bottom:10px;
      .recommend-follow{
        padding:15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #fff;
        border: 1px solid #e6ecf0;
        .recommend-header{
          margin-bottom:10px;
          h3{
            font-size: 18px;
            color: #66757f;
            display:inline;
            font-weight:300;
            line-height:22px;
          }
          small{
            font-size: 12px;
          }
          .reload{
            color: #0084b4;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            &:hover{
              text-decoration: underline;
            }
          }
          .view-all{
            color: #0084b4;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            &:hover{
              color:#1DA1F2;
              text-decoration: underline;
            }
          }
        }
        .recommend-users{
          color: #657786;
          .user{
            margin-top:10px;
            padding:0;
            position:relative;
            .action-dismiss{
              position:absolute;
              color:#ccd6dd;
              font-size: 12px;
              top:0px;right:0px;
              padding:0;
              cursor:pointer;
            }
            .content{
              margin-left: 58px;
              margin-right: 20px;
              position:relative;
              text-align: left;
              .avatar{
                position:absolute;
                width: 48px;
                height: 48px;
                border-radius: 5px;
                left:-58px;top:0px;
                cursor:pointer;
              }
              .account-info{
                text-align: left;
                line-height:15px;
                height:17px;
                cursor:pointer;
                position:relative;
                top:-2px;
                &:hover .full-name{
                  color: #0084B4;
                  text-decoration:underline;
                }
                .full-name{
                  color: #14171a;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 16px;
                  //vertical-align: middle;
                }
                .username{
                  font-size: 14px;
                  color: #657786;
                  line-height: 16px;
                  //vertical-align: middle;
                }
              }
              .follow-btn{
                margin-top: 3px;
                margin-right: 9px;
                padding: 3px 11px 5px;
                background-color: #f5f8fa;
                background-image: linear-gradient(#fff,#f5f8fa);
                border: 1px solid #e6ecf0;
                border-radius: 4px;
                cursor: pointer;
                display: inline-block;
                position:relative;
                height:30px;
                width:74px;
                box-sizing: padding-box;
                line-height: auto;
                &:hover{
                  background-color: #e6ecf0;
                  background-image: linear-gradient(#fff,#e6ecf0);
                }
                &:focus{
                  outline:none;
                }
                .icon{
                  position:absolute;
                  left:12px;top:6px;
                  font-size:15px;
                  color:#1da1f2;
                }
                .follow-text{
                  position:absolute;
                  color: #14171a;
                  font-size: 13px;
                  line-height:16px;
                  right:12px;top:6px;
                  font-weight:bold;
                }
              }
            }
          }
        }
      }
      .import-gmail{
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        background: #f5f8fa;
        border: 1px solid #e6ecf0;
        border-top: 0;
        padding: 15px;
        .import-main{
          padding-bottom: 9px;
          border-bottom: 1px solid #e6ecf0;
          margin-bottom: 8px;
          cursor: pointer;
          overflow: hidden;
          .import-icon{
            display:block;
            float:left;
            padding: 4px 6px;
            border: 1px solid #e6ecf0;
            border-radius: 3px;
            width:24px;height:24px;
            box-sizing: content-box;
            background:#fff url(../assets/twitter_web_sprite_icons.png) no-repeat 6px -636px;
          }
          .import-text{
            margin-left:8px;
            float:left;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            strong{
              font-weight: bold;
              line-height: 16px;
              color: #14171a;
              font-size: 14px;
            }
            span{
              color: #657786;
              display: block;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
        .other-location{
          color: #0084B4;
          font-size: 12px;
          cursor:pointer;
        }
      }
    }
    .foot-links{
      margin-bottom:10px;
      .links{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #fff;
        border: 1px solid #e6ecf0;
        padding: 15px;
        .link-ul{
          word-break: keep-all;
          //font-size:0px;
          line-height:18px;
          .link-li{
            padding-right:8px;
            color: #657786;
            display:inline-block;
            font-size:12px;
            line-height:18px;
            cursor:pointer;
            &:hover{
              color: #1DA1F2;
              text-decoration: underline;
            }
            &:first-of-type:hover{
              color:#657786;
              text-decoration:none;
            }
            &:first-of-type{
              cursor:auto;
            }
          }
        }
      }
      .ads{
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        background: #f5f8fa;
        border: 1px solid #e6ecf0;
        border-top: 0;
        padding: 15px;
        font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
        .ads-text{
          color:#0084b4;
          font-size:12px;
          line-height:16px;
          cursor:pointer;
          &:hover{
            color: #1DA1F2;
            text-decoration:underline;
          }
        }
      }
    }
  }
</style>
