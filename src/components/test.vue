<template lang="html">
  <div class="wrap-all">
    <div class="div1"></div>
    <div class="div2" v-show="divshow"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      divshow:true
    }
  },
  mounted(){
    let div1 = document.getElementsByClassName('div1')[0]
    div1.onclick = () => {
      this.divshow = !this.divshow
      console.log(this.divshow)
    }
  }
}
</script>

<style lang="scss">
.div1{
  width:100px;height:100px;
  background:#ccc;
}
.div2{
  width:100px;height:100px;
  background:red;
}
</style>
