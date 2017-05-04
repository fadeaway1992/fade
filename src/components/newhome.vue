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
        <TrendCard></TrendCard>
      </div>
      <HomeMain :main-avatar="currentUser.avatar"></HomeMain> <!--第二列发推面板与推特内容单独作为一个组件-->
      <HomeRight></HomeRight> <!--第三列推荐关注面板与相关链接单独作为一个组件-->
    </div>
  </div>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import FixedHead from './head.vue'
  import HomeMain from './HomeMain.vue'
  import HomeRight from './HomeRight.vue'
  import TrendCard from './trend.vue'
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
      $('[data-toggle="tooltip"]').tooltip({delay:{"show":300,"hide":200},container:'body',viewport:'body'})
      this.$nextTick(function(){
        var uploader = document.getElementById('uploadAvatar')
        uploader.onchange = () => {
          let file = uploader.files[0]

          let reader = new FileReader()
            reader.onload = ()=>{
            this.currentUser.avatar = reader.result
            this.saveUser(this.currentUser)
            this.db.users[this.userNumber] = this.currentUser
            this.initUser()
            this.saveDB(this.db)
            this.initDB()
          }
          reader.readAsDataURL(file)
          $('[data-toggle="dropdown"]').dropdown('toggle')
        }
      })

    },
    components:{
      FixedHead,
      HomeMain,
      HomeRight,
      TrendCard
    }
  }
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1236px){
  .wrap .home{
    max-width:1190px;
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
              border-radius:5px;
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
  }
}
</style>
