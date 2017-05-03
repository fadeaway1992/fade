<template lang="html">
  <div class="profile-wrap">
    <FixedHead :headAvatar="currentUser.avatar"></FixedHead>
    <div class="main">
      <div class="bg-wrap">
        <img id='bg-img' src="../assets/fight-club.jpg" width="100%">
      </div>
      <div class="user-info-bar">
        <div class="info-container">
          <div class="avatar-wrap">
            <img class="avatar-image" :src="currentUser.avatar" v-show="currentUser.avatar">
            <img src="../assets/owner_empty_avatar.png" v-show="!currentUser.avatar">
          </div>
          <div class="main-info">

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
  components:{
    FixedHead
  },
  mounted(){
    this.initDB()
    this.initUser()
    this.initUserNumber()
    window.onload=()=>{
      let bg = document.getElementById('bg-img')
      window.onscroll=function(){
        let topMax = bg.offsetHeight-320
        if(window.pageYOffset<topMax)
        bg.style.top = parseInt(-window.pageYOffset)+'px'
      }
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

        }
      }
    }
  }
}
</style>
