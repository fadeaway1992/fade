<template lang="html">
  <div class="wrap">
    <div class="head"></div>
    <div class="home">
      <div class="board-left">
        <div class="prof-board">
          <router-link class="prof-bg" :to="{name:'profile',params:{id:$route.params.id}}"></router-link>
          <div class="prof-info">
            <div class="avatar">
              <div class="dropdown">
                <div class="input" data-toggle="dropdown">
                  <span class="glyphicon glyphicon-camera" data-toggle="tooltip" title="添加头像"></span>
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-caret">
                    <span class="caret-outer"></span>
                    <span class="caret-inner"></span>
                  </div>
                  <ul class="dropdown-ul">
                    <li class="upload"><div class="input-wrap"><span>上传照片</span><input type="file"></div></li>
                    <li class="separator"></li>
                    <li class="cancel">取消</li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="user-fields">
              <a href="#" class="name" :to="{name:'profile',params:{id:$route.params.id}}">{{currentUser.username}}</a>
              <a href="#" class="account" :to="{name:'profile',params:{id:$route.params.id}}">@{{currentUser.username}}</a>
            </div>
            <div class="base-info">
              <ul class="info-ul">
                <li class="info-twis" data-toggle="tooltip"><span class="first-row">推文</span><span class="second-row">{{currentUser.twis.length}}</span></li>
                <li class="info-follow"><span class="first-row">正在关注</span><span class="second-row">{{currentUser.follow.length}}</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="trend-board">

        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'

  export default {
    computed:{
      ...mapState([
				'db',
				'currentUser',
				'userNumber'
			])
    },
    methods:{
      ...mapMutations([
        'initDB',
				'saveDB',
				'saveUser',
				'initUser',
				'saveUserNumber',
				'initUserNumber'
      ])
    },
    mounted(){
      this.initDB()
			this.initUser()
			this.initUserNumber()
      this.$nextTick(function(){
        $('[data-toggle="tooltip"]').tooltip()
      })

    }
  }
</script>

<style lang="scss" scoped>
.home{
  .board-left{
    padding:40px;
    .prof-board{
      border:1px solid #e6ecf0;
      width:288px; height:192px;
      box-sizing: content-box;
      margin-bottom:10px;
      border-radius:6px;
      .prof-bg{
        display:block;
        height:95px;
        width:100%;
        background:#1DA1F2 url(../assets/strength.jpeg) no-repeat;
        background-size:100% auto;
        background-position:center center;
        padding:0 1px;
        box-sizing: content-box;
        margin-left:-1px;
        border-bottom:1px solid #e6ecf0;
        border-radius:4px 4px 0 0;
      }
      .prof-info{
        position:relative;
        height:96px;
        .avatar{
          position:absolute;
          left:8px;
          top:-30px;
          height:72px;
          width:72px;
          box-sizing: content-box;
          border-radius:6px;
          padding:1px;
          background:#fff;
          .input{
            border:2px solid #fff;
            background:#1DA1F2;
            border-radius:7px;
            width:68px;height:68px;
            box-sizing: content-box;
            cursor:pointer;
            &:hover{
              border-color:#a4d9f9;
            }
            .glyphicon{
              color:#fff;
              margin:15px 0 0 18px;
              text-shadow: 0 1px 2px rgba(0,0,0,0.33);
              font-size: 32px;
            }
          }
          .dropdown-menu{
            position:absolute;
            left:50%;top:80%;
            transform:translate(-50%,0);
            min-width:220px;
            padding:7px 0 6px 0;
            border:0 solid rgba(0,0,0,0.25);
            box-shadow:0 1px 4px rgba(0,0,0,0.5);
            .dropdown-caret{
              position:absolute;
              left:50%;top:-10px;
              height:0px;
              width:0px;
              background:#ccc;
              transform: translate(-10px,0px);
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
              list-style: none;
              margin:0;
              padding:0;
              li{
                cursor:pointer;
                &:hover {
                  background:#1b95e0;
                }
              }
              .upload{
                padding:0 22px;
                margin:8px 0;
                .input-wrap{
                  position:relative;
                  text-align:center;
                  overflow:hidden;
                  span{
                    font-size:14px;
                    line-height:26px;
                    color:#8799a5;
                  }
                  input{
                    position:absolute;
                    right:0;top:0;
                    cursor:pointer;
                    font-size:26px;
                    opacity:0;
                  }
                }
              }
              .separator{
                height:0px;
                border-bottom:1px solid #e6ecf0;
                margin: 3px 0;
              }
              .cancel{
                padding:0 22px;
                margin:8px 0;
                text-align: center;
                font-size:14px;
                line-height:26px;
                color:#8799a5;
              }
            }
          }
        }
        .user-fields{
          position:absolute;
          top:7px;
          left:90px;
          a{
            display:block;
          }
          .name{
            color:#14171a;
            font-size:18px;
            line-height:25px;
            font-weight:700;
          }
          .account{
            font-size:14px;
            color: #657786;
            line-height:16px;
          }
        }
        .base-info{
          //margin:43px 0 0 11px;
          padding:53px 0 10px 11px;
          .info-ul{
            list-style:none;
            padding:0;
            margin:0;
            li{
              width:138px;
              float:left;
              cursor:pointer;
                &:hover>.first-row{
                  color:#1DA1F2;
                }
            }
            .first-row{
              display:block;
              color: #657786;
              font-size: 10px;
              line-height:12px;
              letter-spacing: .02em;
            }
            .second-row{
              display:block;
              font-size: 18px;
              line-height:18px;
              font-weight: 500;
              padding-top: 3px;
              color: #1DA1F2;
            }
          }
        }
      }
    }
  }
}
</style>
