<template lang="html">
  <div class="profile-wrap">
    <FixedHead :headAvatar="pageOwner.avatar"></FixedHead>
    <div class="main">
      <div class="bg-wrap">
        <img id='bg-img' src="../assets/fight-club.jpg" width="100%">
      </div>
      <div class="user-info-bar">
        <div class="info-container">
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
                <button class="flwbtn followed" type="button" @mouseover="btnText='取消关注'" @mouseout="btnText='正在关注'" v-if="followAlready"><span class="btn-text">{{btnText}}</span></button>
                <button class="flwbtn to-be-follow" type="button" v-if="!followAlready&&!isCurrent"><span class="icon fa fa-user-plus" aria-hidden="true"></span><span class="btn-text">关注</span></button>
                <button class="edit-btn" type="button"><span class='btn-text' v-if="isCurrent">编辑个人资料</span></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FixedHead from './head.vue'
import { mapState,mapMutations } from 'vuex'

export default {
  data(){
    return {
      isCurrent:'',  // 标记当前主页是否为当前登录用户的主页
      followAlready:'', // 标记是否已经关注该用户
      btnText:'正在关注'
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
    ])
  },
  components:{
    FixedHead
  },
  mounted(){
    this.initDB()
    this.initUser()
    this.initUserNumber()
    this.getPageOwner(this.$route.params.id)
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
        max-width: 1190px;
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
          width:890px;
          box-sizing: content-box;
          height:100%;
          float:right;
          position:relative;
          right:-5px;
          padding:0 5px;
          .info-ul{
            display:flex;
            height:100%;
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
            }
          }
        }
      }
    }
  }
}
</style>
