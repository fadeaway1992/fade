<template lang="html">
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
</template>

<script>
export default {
}
</script>

<style lang="scss">
.trend-board{
  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
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
      font-size:18px;
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
</style>
