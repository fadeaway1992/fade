<template lang="html">
  <div class="home-main-wrap">
    <div class="tweet-box">
      <img class="tweet-box-user-img" width="32" height="32" :src="mainAvatar" alt="" v-show="mainAvatar">
      <img class="tweet-box-user-img" width="32" height="32" src="../assets/me.png" alt="" v-show="!mainAvatar">
      <div class="operation-box-down" :class="{'operation-box-up':TwiBoxup}">
        <div class="tweet-content">
          <span class="camera-right fa fa-camera" aria-hidden="true" data-toggle="tooltip" title="添加照片或视频"></span>
          <span class="emoji-picker fa fa-smile-o" aria-hidden="true" data-toggle="tooltip" title="添加表情符号"></span>
          <textarea id="TweetBox" wrap="hard" cols="55" name="tweetBox" placeholder="有什么新鲜事？" maxlength="140" @blur="TwiBoxup=true" @focus="TwiBoxup=false" v-model="twi"></textarea>
        </div>
        <div class="tweet-box-toolbar">
          <div class="tweet-box-extras">
            <span class="extra-item fa fa-camera" aria-hidden="true" data-toggle="tooltip" title="添加照片或视频"></span>
            <span class="extra-item fa fa-picture-o" aria-hidden="true" data-toggle="tooltip" title="添加 GIF"></span>
            <span class="extra-item fa fa-tasks" aria-hidden="true" data-toggle="tooltip" title="添加投票"></span>
            <span class="extra-item fa fa-map-marker" aria-hidden="true" data-toggle="tooltip" title="禁用位置"></span>
          </div>
          <div class="btn-on-right">
            <span class="tweet-counter">{{wordsCount}}</span>
            <button id="new_twi_btn" class="new-twi-btn" type="button" name="button" disabled="disabled" @mousedown="twit()"><span class="btn-icon fa fa-pencil-square-o"></span><span class="btn-text">发推</span></button>
          </div>
        </div>
      </div>
    </div>
    <TweetRender :renderArray="renderArray"></TweetRender>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'
import { getStrLength,bubbleSort,turnToDate } from '../assets/js/tool.js'
import TweetRender from './TweetRender.vue'

export default {
  data () {
    return {
      TwiBoxup:true,
      renderArray:'',
      twi:''
    }
  },
  computed:{
    ...mapState([
      'db',
      'currentUser',
      'userNumber'
    ]),
    wordsCount(){
      return 140 - this.twi.length
    }
  },
  components:{
    TweetRender
  },
  watch:{
    twi:function(newValue){
      let newTwiBtn = document.getElementById('new_twi_btn')
      if(newValue!=0) {
        newTwiBtn.removeAttribute('disabled')
      }else{
        newTwiBtn.setAttribute('disabled','disabled')
      }
    }
  },
  methods:{
    ...mapMutations([
      'initDB',
      'saveDB',
      'saveUser',
      'initUser',
      'saveUserNumber',
      'initUserNumber'
    ]),
    // blur($event){
    //   console.log($event.relatedTarget.tagName)
    // },
    //oninput(){
      //let TweetBox = document.getElementById('TweetBox')
      //let valueLength = getStrLength(TweetBox.value)
      //let newTwiBtn = document.getElementById('new_twi_btn')
      // if(valueLength!=0) {
      //   newTwiBtn.removeAttribute('disabled')}
      // else{
      //   newTwiBtn.setAttribute('disabled','disabled')
      // }

      //this.wordsCount =  140 - valueLength
    //},
    twit () {
      let date = new Date().getTime()
      let content = this.twi
      let username = this.currentUser.username
      this.currentUser.twis.push({date,content,username})
      this.db.users[this.userNumber] = this.currentUser
      this.saveUser(this.currentUser)
      this.saveDB(this.db)
      this.twi = ''
      //this.wordsCount=0
      this.getRenderArray()
    },
    getRenderArray () {
      let renderArray = this.currentUser.twis
      for(let i=0; i < this.currentUser.follow.length; i++){
        for(let j=0; j < this.db.users.length; j++){
          if(this.db.users[j].username === this.currentUser.follow[i]){
            renderArray = renderArray.concat(this.db.users[j].twis)
            break
          }
        }
      }
      this.renderArray =  bubbleSort(renderArray)
    }
  },
  mounted(){
    this.getRenderArray()
    //$('[data-toggle="tooltip"]').tooltip({delay:{"show":300,"hide":200},container:'body',viewport:'body'})
  }
}
</script>

<style lang="scss" scoped>
.home-main-wrap{
  margin:0 10px;
  width:590px;
  box-sizing: content-box;
  border-radius:6px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  .tweet-box{
    background:#E8F5FD;
    padding:10px 12px;
    border-radius:5px 5px 0 0;
    border: 1px solid #e6ecf0;
    position:relative;
    .tweet-box-user-img{
      position:absolute;
      left:28px;top:13px;
      border-radius:4px;
    }
    .operation-box-down{
      margin-left: 56px;
      overflow: hidden;
      .tweet-content{
        position:relative;
        padding-top:3px;
        margin-bottom: 8px;
        .camera-right{
          position:absolute;
          right:13px; top:11px;
          font-size:18px;
          color:#339dc3;
          cursor:pointer;
          display:none;
        }
        .emoji-picker{
          position:absolute;
          right:10px;bottom:5px;
          color:#aab8c2;
          font-size:22px;
          line-height:22px;
          font-weight:500;
          cursor:pointer;
        }
        textarea{
          width:506px;height:80px;
          box-sizing:padding-box;
          padding:8px 31px 8px 10px;
          border: 1px solid #A4D9F9;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          border-radius:3px;
          resize:none;
          font-size:14px;
          line-height:20px;
          transition:all 0.05s ease;
          &:focus{
            outline:none;
          }
        }
      }
      .tweet-box-toolbar{
        .tweet-box-extras{
          float:left;
          .extra-item{
            color:#0084B4;
            opacity:0.8;
            padding:4px 10px;
            border-radius: 4px;
            font-size:21px;
            font-weight:bold;
            line-height:27px;
            border:1px solid transparent;
            margin-left:5px;
            cursor:pointer;
            &:hover{
              background-image: linear-gradient(rgba(255,255,255,0), rgba(0,132,180,.1));
              border-color: rgba(0,132,180,.5);
            }
            &:first-of-type{
              margin-left:0;
            }
            &:last-of-type{
              background:none;
              border:none;
              opacity:0.5;
              cursor:auto;
            }
            &:last-of-type:hover{
              background:none;
              border:none;
            }
          }

        }
        .btn-on-right{
          float:right;
          .tweet-counter{
            color:#657786;
            display: inline-block;
            width: 35px;
            padding: 0 3px;
            font-size: 14px;
            line-height:18px;
            vertical-align:top;
            text-shadow: 0 1px 1px rgba(255,255,255,0.75);
            position:relative;
            top:10px;
          }
          .new-twi-btn{
            padding: 9px 16px 8px 17px;
            color:#fff;
            cursor:pointer;
            height:21px;
            box-sizing: content-box;
            //margin-top:7px;
            transition:all 0.15s ease-in-out;
            font-size:14px;
            font-weight:500;
            background:rgba(0,132,180,.8);
            display:inline-block;
            border:1px solid transparent;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
            border-radius:4px;
            //background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.05));
            &:hover {
              background-color: #0084B4;
            }
            &:focus{
              outline:none;
            }
            .btn-icon{
              font-size:23px;
              line-height:21px;
            }
            .btn-text{
              margin-left:3px;
              vertical-align: top;
              position:relative;
              top:4px;
            }
          }
          .new-twi-btn[disabled='disabled']{
            opacity:0.2;
            cursor:auto;
            &:hover{
              background-color:rgba(0,132,180,.8);
            }
          }
        }
      }
    }
    .operation-box-up{
      margin-left: 56px;
      overflow: hidden;
      .tweet-content{
        position:relative;
        padding-top:0px;
        margin-bottom: 0px;
        .camera-right{
          position:absolute;
          right:13px; top:11px;
          font-size:18px;
          color:#339dc3;
          cursor:pointer;
          display:block;
        }
        .emoji-picker{
          display:none;
        }
        textarea{
          width:506px;height:36px;
          box-sizing:padding-box;
          padding:8px 31px 8px 10px;
          border: 1px solid #A4D9F9;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          border-radius:3px;
          resize:none;
          font-size:14px;
          line-height:20px;
          &:focus{
            outline:none;
          }
        }
      }
      .tweet-box-toolbar{
        display:none;
      }
    }
  }
}
</style>
