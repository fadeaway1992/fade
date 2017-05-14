<template lang="html">
  <div class="profile-wrap">
    <FixedHead :headAvatar="currentUser.avatar" :current="currentUser"></FixedHead>
    <div class="main">
      <div class="bg-wrap">
        <img id='bg-img' src="../assets/fight-club.jpg" width="100%">
      </div>
      <div class="user-info-bar">
        <div class="info-container flex-width">
          <div class="avatar-wrap">
            <img class="avatar-image" :src="pageOwner.avatar" v-show="pageOwner.avatar">
            <img src="../assets/owner_empty_avatar.png" v-show="!pageOwner.avatar">
          </div>
          <div class="main-info">
            <ul class="info-ul">
              <li class="item item-twis"><span class="text">推文</span><span class="count">{{pageOwner.twis.length}}</span></li>
              <li class="item item-follow"><span class="text">正在关注</span><span class="count">{{pageOwner.follow.length}}</span></li>
              <li class="item item-follow"><span class="text">关注者</span><span class="count">{{pageOwner.followers.length}}</span></li>
              <li class="item-right">
                <button class="flwbtn followed" type="button" @click="unfollow" @mouseover="btnText='取消关注'" @mouseout="btnText='正在关注'" v-if="followAlready"><span class="btn-text">{{btnText}}</span></button>
                <button class="flwbtn to-be-follow" type="button" @click="follow" v-if="!followAlready&&!isCurrent"><span class="icon fa fa-user-plus" aria-hidden="true"></span><span class="btn-text">关注</span></button>
                <button class="edit-btn" type="button" v-if="isCurrent"><span class='btn-text'>编辑个人资料</span></button>
                <div class="more" v-if="!isCurrent">
                  <span class="icon glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-wrap flex-width">
        <div class="column-left">
          <div class="prof-card">
            <h1 class="full-name">{{pageOwner.username}}</h1>
            <h2 class="account">@<span class="account-name">{{pageOwner.username}}</span></h2>
            <p class="user-main-topics"><span class="item">#FightClub</span> · <span class="item">#SplashBrothers</span></p>
            <div class="user-location">
              <span class="icon fa fa-map-marker" aria-hidden="true"></span><span class="text">Mars Galaxy </span>
            </div>
            <div class="user-link">
              <span class="icon fa fa-link" aria-hidden="true"></span><a class="text">t66y.com</a>
            </div>
            <div class="user-calendar">
              <span class="icon fa fa-calendar-plus-o" aria-hidden="true"></span><span class="text">加入于1921年7月</span>
            </div>
            <button type="button" class="tweet-to-him" v-if="!isCurrent"><span class="icon fa fa-pencil-square-o" aria-hidden="true"></span><span class="text">发推给 {{pageOwner.username}}</span></button>
          </div>
        </div>
        <div class="colunm-middle">
          <div class="selection-row">
            <ul class="selection-ul">
              <li class="current-selection">推文</li>
              <li class="selection-item">推文和回复</li>
              <li class="selection-item">媒体</li>
            </ul>
          </div>
          <TweetRender :mainTweetAvatar="pageOwner.avatar" :renderArray="twisArray"></TweetRender>
        </div>
        <div class="column-right flex-hide">
          <ProfRight showfoot="true"></ProfRight><TrendCard></TrendCard>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import FixedHead from './head.vue'
import TweetRender from './TweetRender.vue'
import ProfRight from './HomeRight.vue'
import TrendCard from './trend.vue'
import { mapState,mapMutations } from 'vuex'
import { bubbleSort } from '../assets/js/tool.js'

export default {
  data(){
    return {
      isCurrent:'',  // 标记当前主页是否为当前登录用户的主页
      followAlready:'', // 标记是否已经关注该用户
      btnText:'正在关注',
      twisArray:''
    }
  },
  computed:{
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
    follow () {
      this.currentUser.follow.push(this.pageOwner.username)
      this.db.users[this.userNumber] = this.currentUser
      this.pageOwner.followers.push(this.currentUser.username)
      this.db.users[sessionStorage.OwnerNumber] = this.pageOwner
      this.saveUser(this.currentUser)
      this.saveDB(this.db)
      this.getPageOwner(this.$route.params.id)
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
      this.getPageOwner(this.$route.params.id)
      this.followAlready = false
    }
  },
  components:{
    FixedHead,
    TweetRender,
    ProfRight,
    TrendCard
  },
  mounted(){
    this.initDB()
    this.initUser()
    this.initUserNumber()
    this.getPageOwner(this.$route.params.id)
    this.twisArray = bubbleSort(this.pageOwner.twis)
    window.onload=()=>{
      let bg = document.getElementById('bg-img')
      window.onscroll=function(){
        let topMax = bg.offsetHeight-320
        if(window.pageYOffset<topMax)
        bg.style.top = parseInt(-window.pageYOffset)+'px'
      }
    }
    if(this.pageOwner.username === this.currentUser.username){
      this.isCurrent=true
      this.followAlready=false
    }else{
      this.isCurrent=false
      //console.log(this.currentUser.follow.length)
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

<style lang="scss">
.profile-wrap{
  .head-wrap{
    border-bottom:none;
  }
}
</style>

<style lang="scss" scoped>
.profile-wrap{
  .home-right-wrap{
    margin-top: 10px;
  }
}
.profile-wrap{
  .main{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    .bg-wrap{
      margin-top:46px;
      height:320px;
      background:#ccc;
      overflow:hidden;
      #bg-img{
        position:relative;
      }
    }
    .user-info-bar{
      height:60px;
      background:#fff;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
      .info-container{
        margin:0 auto;
        height:60px;
        padding:0;
        position:relative;
        .avatar-wrap{
          position:absolute;
          left:10px;top:-123px;
          width:210px;height:210px;
          border: 5px solid #fff;
          background:#fff;
          border-radius: 12px;
          box-shadow: 0 1px 1px rgba(136,153,166,0.15);
          img{
            height:100%;
            width:100%;
            background:#0084B4;
            border-radius: 8px;
            cursor:pointer;
          }
        }
        .main-info{
          width:66.6666%;
          @media screen and (min-width:1190px){
            width:75%;
          }
          box-sizing: border-box;
          height:100%;
          float:right;
          padding:0 5px;
          .info-ul{
            display:flex;
            height:100%;
            position:relative;
            .item{
              color: #657786;
              height: 60px;
              box-sizing: border-box;
              border-bottom: 0 solid #002A5C;
              padding: 14px 15px 7px;
              transition: all .15s ease-in-out;
              text-align: center;
              cursor:pointer;
              &:hover{
                border-bottom-width: 4px;
              }
              &:hover .count{
                color:#002A5C;
              }
              .text{
                text-align: center;
                display:block;
                font-size:11px;
                letter-spacing: .02em;
              }
              .count{
                text-align: center;
                display:block;
                font-size: 18px;
                font-weight: 600;
                padding-top: 3px;
                transition: color .15s ease-in-out;

              }
            }
            .item-twis{
              border-bottom-width: 4px;
              .count{
                color:#002A5C;
              }
            }
            .item-right{
              position:absolute;
              right:0;top:0;
              box-sizing: border-box;
              background-color: #fff;
              height:59px;
              padding: 12px 0 0 2px;
              .flwbtn{
                margin-left:4px;
                padding: 6px 12px 7px 12px;
                width:99px;height:40px;
                box-sizing: border-box;
                text-align:center;
                &:focus{
                  outline:none;
                }
                .btn-text{
                  font-size: 14px;
                  line-height:25px;
                  font-weight: bold;
                  display:inline-block;
                  text-align: center;
                }
              }
              .followed{
                color: #fff;
                background-color: #1da1f2;
                background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.05));
                border: 1px solid #3b88c3;
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
                border-radius: 4px;
                &:hover{
                  background-color: #e0245e;
                  background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.15));
                  border: 1px solid rgb(192,31,80);
                }
              }
              .to-be-follow{
                color: #14171a;
                background-color: #f5f8fa;
                background-image: linear-gradient(#fff,#f5f8fa);
                border: 1px solid #e6ecf0;
                border-radius: 4px;
                &:hover{
                  background-color: #e6ecf0;
                  background-image: linear-gradient(#fff,#e6ecf0);
                }
                .icon{
                  color: #1da1f2;
                  font-size: 18px;
                  line-height:25px;
                  padding-right:5px;
                }
              }
              .edit-btn{
                width:118px;height:40px;
                padding:9px 16px;
                background-color: #f5f8fa;
                background-image: linear-gradient(#fff,#f5f8fa);
                border: 1px solid #e6ecf0;
                border-radius: 4px;
                text-align:center;
                .btn-text{
                  display:inline-block;
                  color:#66757f;
                  font-size: 14px;
                  line-height:20px;
                  font-weight:bold;
                }
                &:hover{
                  background-color: #e6ecf0;
                  background-image: linear-gradient(#fff,#e6ecf0);
                }
                &:hover .btn-text{
                  color: #14171a;
                }
              }
              .more{
                display:inline-block;
                padding-left:5px;
                height:40px;
                vertical-align: top;
                cursor:pointer;
                .icon{
                  // margin:0 8px 0 3px;
                  font-size: 18px;
                  line-height: 40px;
                  color: #657786;
                }
                &:hover .icon{
                  color: #002A5C;
                }
              }
            }
          }
        }
      }
    }
    .app-wrap{
      margin:0 auto;
      height:600px;
      display:flex;
      .column-left{
        width:25%;
        @media screen and (max-width: 1190px){
          width:33.3333%;
        }
        padding:0 5px;
        .prof-card{
          margin:37px 0 25px 0;
          padding:0 15px;
          height:50px;
          .full-name{
            font-size: 22px;
            font-weight: 700;
            line-height: 24px;
            word-wrap: break-word;
          }
          .account{
            margin-bottom:10px;
            color:#657786;
            font-size: 14px;
            line-height:22px;
            font-weight:300;
            cursor:pointer;
            .account-name{
              font-weight:normal;
              &:hover{
                text-decoration: underline;
              }
            }
          }
          .user-main-topics{
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
            word-wrap: break-word;
            .item{
              color:#002A5C;
              cursor:pointer;
              &:hover{
                text-decoration:underline;
              }
            }
          }
          .user-location{
            margin-top:6px;
            color: #657786;
            font-size: 14px;
            line-height: 18px;
            .icon{
              font-size: 18px;
              line-height: 18px;
              width:20px;
            }
            .text{
              color:#14171a;
            }
          }
          .user-link{
            @extend .user-location;
            .icon{
              font-size:14px;
            }
            .text{
              color:#002A5C;
              cursor:pointer;
              &:hover{
                text-decoration:underline;
              }
            }
          }
          .user-calendar{
            @extend .user-location;
            .icon{
              font-size:14px;
            }
          }
          .tweet-to-him{
            display:block;
            height:22px;
            box-sizing: content-box;
            color:#fff;
            margin:15px 0 0 0;
            padding:9px 16px 7px 17px;
            transition:all 0.15s ease-in-out;
            background-color: #31547c;
            border:1px solid transparent;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
            border-radius:4px;
            text-align: center;
            &:hover{
              background-color: #002A5C;
            }
            &:focus{
              outline:none;
            }
            .icon{
              font-size:22px;
              margin-right:6px;
            }
            .text{
              font-size:14px;
              line-height:22px;
              font-weight:bold;
              vertical-align:top;
            }
          }
        }
      }
      .colunm-middle{
        width:50%;
        @media screen and (max-width: 1190px){
          width:66.6666%;
        }
        padding:0 5px;
        .selection-row{
          margin-top:10px;
          height:48px;
          border: 1px solid #e6ecf0;
          background-color: #fff;
          border-radius: 5px 5px 0 0;
          .selection-ul{
            .current-selection{
              display: inline-block;
              padding: 15px 15px 12px;
              height:18px;
              box-sizing: content-box;
              color:#14171a;
              font-size:18px;
              font-weight:500;
              line-height:18px;
            }
            .selection-item{
              display:inline-block;
              color:#002a5c;
              font-size:18px;
              font-weight:300;
              line-height:18px;
              height:18px;
              box-sizing: content-box;
              padding: 15px 15px 12px;
              cursor:pointer;
              &:hover{
                text-decoration:underline;
              }
            }
          }
        }
      }
      .column-right{
        width:25%;
        padding:0 5px;
      }
    }
  }
}
</style>
