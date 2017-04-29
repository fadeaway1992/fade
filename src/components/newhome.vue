<template lang="html">
  <div class="wrap">
    <FixedHead :head-avatar="currentUser.avatar"></FixedHead>
    <div class="home">
      <div class="board-left">
        <div class="prof-board">
          <router-link class="prof-bg" :to="{name:'profile',params:{id:$route.params.id}}"></router-link>
          <div class="prof-info">
            <div class="avatar">
              <div class="dropdown">
                <div class="input" data-toggle="dropdown">
                  <img class="avatar-image" :src="currentUser.avatar" width="100%" height="100%" v-show="currentUser.avatar">
                  <span class="glyphicon glyphicon-camera" data-toggle="tooltip" title="添加头像" v-show="!currentUser.avatar"></span>
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-caret">
                    <span class="caret-outer"></span>
                    <span class="caret-inner"></span>
                  </div>
                  <ul class="dropdown-ul">
                    <li class="upload"><div class="input-wrap"><span>上传照片</span><input id="uploadAvatar" accept="image/png,image/jpeg" type="file"></div></li>
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
          <div class="module-header">
            <h3>趋势</h3><span class="middot"> · </span><span class="change-trends">更改</span>
          </div>
          <div class="module-body">
            <ul class="body-ul">
              <li class="trend-item">
                <p class="item-title">Beijing</p>
                <p class="item-amount">1万 推文</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#fccjournconf</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#ASEAN2017</p>
                <p class="item-amount">4,775 推文</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#fyrefestival</p>
                <p class="item-amount">39.9万 推文</p>
              <li class="trend-item">
                <p class="item-title">America</p>
                <p class="item-amount">34.2万 推文</p>
              <li class="trend-item">
                <p class="item-title">#GIFYourChildhood</p>
                <p class="item-amount">5,316 推文</p>
              </li>
              <li class="trend-item">
                <p class="item-title">Manila</p>
                <p class="item-amount">2.64万 推文</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#saturdaymorning</p>
                <p class="item-amount">6,527 推文</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#KoreanPeninsula</p>
              </li>
              <li class="trend-item">
                <p class="item-title">#Trump</p>
                <p class="item-amount">8.7万 推文</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import FixedHead from './head.vue'

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
      ...mapMutations([
        'initDB',
				'saveDB',
				'saveUser',
				'initUser',
				'saveUserNumber',
				'initUserNumber'
      ])
    },
    created(){
      // 设置背景色和favicon
      this.$nextTick(function(){
        let body = document.getElementsByTagName('body')[0]
        body.style.backgroundColor="#f5f8fa"
        document.getElementById('favicon').href="../assets/favicon.ico"
      })
    },
    mounted(){
      this.initDB()
			this.initUser()
			this.initUserNumber()
      this.$nextTick(function(){
        $('[data-toggle="tooltip"]').tooltip()
        var uploader = document.getElementById('uploadAvatar')
        uploader.onchange = () => {
          let file = uploader.files[0]

          let reader = new FileReader()
            reader.onload = ()=>{
            this.currentUser.avatar = reader.result
            this.saveUser(this.currentUser)
            this.initUser()
            this.db.users[this.userNumber] = this.currentUser
            this.saveDB(this.db)
            this.initDB()
          }
          reader.readAsDataURL(file)
          $('[data-toggle="dropdown"]').dropdown('toggle')
        }
      })

    },
    components:{
      FixedHead
    }
  }
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1236px){
  .head-wrap .container {
    max-width: 1190px;
    box-sizing: content-box;
  }
  .wrap .home{
    width:1190px;
  }
}
.wrap{
  width:100%;
  position:relative;
}
.home{
  width:auto;
  margin:0 auto;
  padding:56px 14px 15px;
  position:relative;
  display:flex;
  box-sizing: content-box;
  .board-left{
    width:290px;
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
        background:#fff;
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
            position:relative;
            .avatar-image{
              position:absolute;
              left:0px;top:0px;
            }
            &:hover{
              border-color:#a4d9f9;
            }
            .glyphicon{
              color:#fff;
              margin:15px 0 0 18px;
              text-shadow: 0 1px 2px rgba(0,0,0,0.33);
              font-size: 32px;
              z-index:0;
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
    .trend-board{
      background:#fff;
      border:1px solid #e6ecf0;
      border-radius:5px;
      padding:15px;
      margin-bottom:10px;
      .module-header{
        line-height:20px;
        margin-bottom:10px;
        h3{
          display:inline-block;
          font-size:20px;
          color:#66757f;
          font-weight:300;
          line-height:22px;
        }
        .middot{
          color:#66757f;
          font-size:12px;
          line-height:20px;
        }
        .change-trends{
          font-size:12px;
          color:#0084B4;
          line-height:20px;
          font-weight:400;
          cursor:pointer;
          &:hover{
            color:#1DA1F2;
            text-decoration:underline;
          }
        }
      }
      .module-body{
        font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
        .body-ul{
          .trend-item{
            line-height:17px;
            margin-bottom:10px;
            .item-title{
              color:#0084b4;
              font-size:13px;
              line-height:17px;
              font-weight:bold;
              cursor:pointer;
              &:hover{
                color:#1DA1F2;
                text-decoration:underline;
              }
            }
            .item-amount{
              color:#657786;
              font-size:13px;
              line-height:17px;
              font-weight:normal;
            }
          }
        }
      }
    }
  }
}
</style>
