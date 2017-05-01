<template lang="html">
  <div class="tweet-render-wrap">
    <div class="show-unread">查看 61 条新推文</div>
  </div>
</template>

<script>
export default {
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
}
</style>
