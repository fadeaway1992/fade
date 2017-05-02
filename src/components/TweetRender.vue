<template lang="html">
  <div class="tweet-render-wrap">
    <div class="show-unread">查看 61 条新推文</div>
    <transition-group tag="ul" name="slide" class="render-ul">
      <li class="render-item"  v-for="item in renderArray" :key="item.date">
        <img class="tweet-item-user-img" width="48" height="48" :src="getAvatar(item.username)" alt="" v-show="getAvatar(item.username)">
        <img class="tweet-item-user-img" width="48" height="48" src="../assets/me.png" alt="" v-show="!getAvatar(item.username)">
        <div class="item-content">
          <div class="item-header">
            <span class="full-name">{{item.username}}</span>
            <span class="user-account">@{{item.username}}</span>
            <small>· </small><small class="time">{{turnToDate(item.date)}}</small>
            <div class="actions">
              <div class="dropdown">
                <span data-toggle="dropdown"><span class="dropdown-toggle fa fa-chevron-down" aria-hidden="true" data-toggle="tooltip" title="更多"></span></span>
                <div class="dropdown-menu">
                  <div class="dropdown-caret">
                    <div class="caret-outer"></div>
                    <div class="caret-inner"></div>
                  </div>
                  <ul class="dropdown-ul">
                    <li class="dropdown-li">私信分享</li>
                    <li class="dropdown-li">复制推文链接</li>
                    <li class="dropdown-li">嵌入推文</li>
                    <li class="dropdown-li">在个人资料页面置顶</li>
                    <li class="dropdown-li">删除推文</li>
                    <li class="dropdown-divider"></li>
                    <li class="dropdown-li">添加到新瞬间</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="text-container" v-html="wrapContent(item.content)"></div>
          <div class="item-footer">
            <span class="action action-reply fa fa-reply" aria-hidden="true" data-toggle="tooltip" title="回复"></span><span class="action action-retweet fa fa-retweet" aria-hidden="true" data-toggle="tooltip" title="转推"></span><span class="action action-favorite fa fa-heart" aria-hidden="true" data-toggle="tooltip" title="喜欢"></span><span class="action action-analytics fa fa-bar-chart" aria-hidden="true"  data-toggle="tooltip" title="查看推文动态"></span>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>

import { turnToDate } from '../assets/js/tool.js'
import {mapState,mapMutations} from 'vuex'

export default {
  data(){
    return {

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
    turnToDate (date) {
      return turnToDate(date)
    },
    wrapContent(content){
      return content.replace(/\n/g,'<br>')
    },
    getAvatar(username){
      for(let i=0; i<this.db.users.length; i++){
        if(username == this.db.users[i].username){
          return this.db.users[i].avatar
        }
      }
    }
  },
  props:['mainTweetAvatar','renderArray'],
  // mounted () {
  //   $('[data-toggle="tooltip"]').tooltip({delay:{"show":300,"hide":200},container:'body',viewport:'body'})
  // },
  created () {
    this.$nextTick(function(){
      $('[data-toggle="tooltip"]').tooltip({delay:{"show":300,"hide":200},container:'body',viewport:'body'})
    })
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-enter, .slide-leave-active {
  opacity: 0;
}
.tweet-render-wrap{
  .show-unread{
    padding:10px 1px;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    height:18px;
    box-sizing: content-box;
    background-color: #f5f8fa;
    border-bottom: 1px solid #e6ecf0;
    cursor:pointer;
    color:#0e8ab8;
    text-align:center;
    font-size:13px;
    line-height:18px;
    &:hover{
      background-color: #e6ecf0;
    }
  }
  .render-ul{
    .render-item{
      background: #fff;
      border-left: 1px solid #e6ecf0;
      border-right: 1px solid #e6ecf0;
      border-bottom: 1px solid #e6ecf0;
      padding:9px 12px;
      cursor:pointer;
      //overflow: hidden;
      &:hover{
        background:#f5f8fa;
      }
      .tweet-item-user-img{
        border-radius:5px;
        margin-top:3px;
        float:left;
      }
      .item-content{
        margin-left:58px;
        .item-header{
          .full-name{
            font-size:14px;
            line-height:18px;
            font-weight:bold;
            &:hover{
              color:#0084B4;
              text-decoration:underline;
            }
          }
          .user-account{
            color: #657786;
            font-size: 14px;
            line-height:18px;
          }
          small{
            color: #657786;
            font-size: 14px;
            line-height:18px;
          }
          .time{
            color: #657786;
            font-size: 14px;
            line-height:18px;
            &:hover{
              color:#0084B4;
              text-decoration:underline;
            }
          }
          .actions{
            float:right;
            display:inline-block;
            .dropdown{
              display:inline-block;
              .dropdown-toggle{
                font-size: 12px;
                line-height: 12px;
                color:#aab8c2;
                &:hover{
                  color: #1DA1F2;
                }
              }
              .dropdown-menu{
                box-sizing: content-box;
                top:30px;
                left:-15px;
                border:none;
                box-shadow: 0 1px 4px rgba(0,0,0,0.25);
                .dropdown-caret{
                  position:absolute;
                  left:10px;
                  top:-10px;
                  .caret-outer{
                    position:absolute;
                    left:0;top:0;
                    height:0;width:0;
                    border-left:10px solid transparent;
                    border-right:10px solid transparent;
                    border-bottom:10px solid rgba(0,0,0,0.1);
                  }
                  .caret-inner{
                    position:absolute;
                    left:1px;top:1px;
                    height:0;width:0;
                    border-left:9px solid transparent;
                    border-right:9px solid transparent;
                    border-bottom:9px solid #fff;
                  }
                }
                .dropdown-ul{
                  .dropdown-li{
                    padding:5px 20px;
                    font-size:13px;
                    line-height:18px;
                    color:#66757f;
                    &:hover{
                      background:#0084B4;
                      color:#fff;
                    }
                  }
                  .dropdown-divider{
                    padding-top: 1px;
                    margin: 5px 1px 6px;
                    border-bottom: 1px solid #e6ecf0;
                  }
                }
              }
            }
          }
        }
        .text-container{
          font-size:14px;
          line-height:20px;
          padding-top:1px;
        }
        .item-footer{
          height:18px;
          box-sizing: content-box;
          margin-top:11px;
          margin-bottom:2px;
          .action{
            width:20px;
            box-sizing: border-box;
            color:#aab8c2;
            font-size:16px;
            line-height:16px;
            padding-left: 2px;
            margin-right:60px;
          }
          .action-reply:hover{
            color:#1da1f2;
          }
          .action-retweet:hover{
            color:#17bf63;
          }
          .action-favorite:hover{
            color:#e0245e;
          }
          .action-analytics:hover{
            color:#1DA1F2;
          }
        }
      }
    }
  }
}
</style>
