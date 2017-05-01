<template lang="html">
  <div class="tweet-render-wrap">
    <div class="show-unread">查看 61 条新推文</div>
    <ul class="render-ul">
      <li class="render-item">
        <img class="tweet-item-user-img" width="48" height="48" :src="mainTweetAvatar" alt="" v-show="mainTweetAvatar">
        <img class="tweet-item-user-img" width="48" height="48" src="../assets/me.png" alt="" v-show="!mainTweetAvatar">
        <div class="item-content">
          <div class="item-header">
            <span class="full-name">Zangjiabin</span>
            <span class="user-account">@zangjiabin1992</span>
            <small>· </small><small class="time">17分</small>
            <div class="actions">
              <div class="dropdown">
                <span class="dropdown-toggle fa fa-chevron-down" aria-hidden="true" data-toggle="tooltip" title="更多"></span>
              </div>
            </div>
          </div>
          <div class="text-container">我爱这艰难又拼尽了全力的每一天 —— 朴树·空帆船</div>
          <div class="item-footer">

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['mainTweetAvatar']
}
</script>

<style lang="scss">
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
      overflow: hidden;
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
        }
      }
    }
  }
}
</style>
