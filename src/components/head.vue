<template lang="html">
  <div class="head-wrap">
    <div class="container">
      <h1 class="fa fa-twitter" aria-hidden="true"></h1>
      <div class="navi">
        <ul class="navi-ul">
          <li class="home active"><div class="li-navi"><span class="glyphicon glyphicon-home li-icon" aria-hidden="true"></span><span class="li-text">主页</span></div></li>
          <li class="notifications"><div class="li-navi"><span class="fa fa-bell li-icon" aria-hidden="true"></span><span class="li-text">通知</span></div></li>
          <li class="letters"><div class="li-navi"><span class="fa fa-envelope li-icon" aria-hidden="true"></span><span class="li-text">私信</span></div></li>
        </ul>
      </div>
      <div class="pull-right">
        <div class="search">
          <input class="search-input" type="text" placeholder="搜索 Twitter"><span class="search-icon"><span class="search-btn fa fa-search" aria-hidden="true"></span></span>
        </div>
        <div class="me">
          <div class="avatar" data-toggle="tooltip" data-placement="bottom" title="个人资料与账号">
            <img class="avatar-img" :src="headAvatar" width="32" height="32" v-show="headAvatar">
            <img class="avatar-img" src="../assets/me.png" width="32" height="32" v-show="!headAvatar">
          </div>
        </div>
        <div class="new-twi">
          <button class="new-twi-btn" type="button" name="button"><span class="btn-icon fa fa-pencil-square-o"></span><span class="btn-text">发推</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'

export default {
  data(){
    return {

    }
  },

  props:['headAvatar'],

  mounted() {
    $('[data-toggle="tooltip"]').tooltip({delay:{"show":300,"hide":200},container:'body',viewport:'body'})
  }


}
</script>


<style lang="scss">
  @media screen and (min-width: 1236px){
    .head-wrap .container {
      max-width: 1190px;
    }
  }
  .head-wrap{
    width:100%;
    height:46px;
    box-sizing: content-box;
    background:#fff;
    position:fixed;
    z-index: 1000;
    left:0px;top:0px;
    border-bottom:1px solid rgba(0,0,0,0.15);
    box-shadow: 0 1px 0 #e6ecf0;
    //overflow: hidden;
    .container{
      width:auto;
      box-sizing: content-box;
      //background:#999;
      text-align:center;
      padding:0;
      margin:0 auto;
      position:relative;
      .fa-twitter{
        position:absolute;
        left:50%;
        width:24px;
        margin:0 0 0 -12px;
        font-size:23px;
        color:#1da1f2;
        line-height:46px;
        cursor:pointer;
      }
      .navi{
        float:left;
        .navi-ul{
          margin-right:12px;
          list-style:none;
          cursor:pointer;
          height:46px;
          overflow: hidden;
          li{
            float:left;
            color:#66757f;
            transition:all 0.15s ease-in-out;
            border-bottom:5px solid #0084B4;
            height:46px;
            box-sizing: content-box;
            position:relative;
            &:hover {
              color:#0084b4;
              height:42px;
            }
            padding:0 14px 0 4px;
            position:relative;
            width:62px;
            box-sizing: content-box;
            text-align:left;
            .li-icon{
              margin:11px 0 0 10px;
              width:23px;height:23px;
              font-size:21px;
              color:inherit;
              top:0px;
            }
            .li-text{
              position:absolute;
              left:40px;top:17px;
              font-size:13px;
              line-height:13px;
              font-weight:500;
              color:inherit;
            }
          }
          .active{
            height:42px;
            &:before{
              content:'';
              position:absolute;
              left:6px;top:6px;
              width:6px;height:6px;
              border-radius: 50%;
              background:#0084B4;
            }
          }
        }
      }
      .pull-right{
        float:right;
        display:flex;
        .search{
          margin:7px 15px 0 0;
          position:relative;
          .search-input{
            width:180px;
            height:19px;
            padding:5px 27px 6px 12px;
            box-sizing: content-box;
            background-color: #f5f8fa;
            border: 1px solid #e6ecf0;
            border-radius:21px;
            font-size:12px;
            transition:all 0.2s ease-in-out;
            &:focus{
              background-color: #fff;
              outline:none;
              border-color:#e6ecf0;
            }
          }
          .search-icon{
            position:absolute;
            top:3px;
            right:-3px;
            width:26px;
            height:26px;
            cursor:pointer;
            text-align:left;
            .search-btn{
              font-size:13px;
              line-height:18px;
              color:#66757f;
              padding-top:3px;
            }
          }
          // &:before{
          //   content:'搜索 Twitter';
          //   position:absolute;
          //   left:14px;top:7px;
          //   font-size:12px;
          //   line-height:16px;
          //   color:#687a89;
          // }
        }
        .me{
          margin-right:15px;
          position:relative;
          .avatar{
            border-radius:50%;
            width:32px;
            height:32px;
            box-sizing: content-box;
            overflow: hidden;
            margin-top:7px;
            position:relative;
            background:#f5f8fa;
            border:1px solid rgba(102, 117, 127,.3);
            cursor:pointer;
          }
        }
        .new-twi{
          margin-right:15px;
          position:relative;
          font-size:14px;
          line-height:18px;
          .new-twi-btn{
            padding:0 13px 0 14px;
            color:#fff;
            cursor:pointer;
            height:32px;
            box-sizing: content-box;
            margin-top:7px;
            transition:all 0.15s ease-in-out;
            font-size:13px;
            font-weight:500;
            background:rgba(0,132,180,.8);
            display:block;
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
              line-height:32px;
            }
            .btn-text{
              margin-left:3px;
              vertical-align: top;
              position:relative;
              top:7px;
            }
          }
        }
      }
    }
  }

</style>
