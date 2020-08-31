<template>
  <div class="mine">
    <van-nav-bar title="会员中心" fixed placeholder z-index="10" />

    <div class="mine-name">
      <div class="mine-tx">
        <img src="../assets/image/tx.jpg" alt />
      </div>
      <div class="mine-name-text">
        <h2>嘤嘤嘤</h2>
        <span>普通会员</span>
      </div>
      <div class="vip">
        <strong>黑金卡</strong>
        <span>立即开通</span>
      </div>
    </div>
    <div class="my-order">
      <van-cell title="我的订单" is-link />
      <van-grid>
        <van-grid-item icon="photo-o" text="待付款" />
        <van-grid-item icon="photo-o" text="待发货" />
        <van-grid-item icon="photo-o" text="待收货" />
        <van-grid-item icon="photo-o" text="已收货" />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.mine {
    background #eee
  .mine-name {
    position: relative;
    width: 100%;
    height: 180px;
    background: orange;
    padding-top: 20px;
    display: flex;

    .mine-tx {
      width: 80px;
      height: 80px;
      margin: 0 12px 0 30px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .mine-name-text {
      height: 80px;
      display: flex;
      flex-flow: column;

      h2 {
        font-size: 16px;
        margin: 10px 0;
      }

      span {
        display: block;
        width: 80px;
        height: 20px;
        background: green;
        font-size: 12px;
        color: #fff;
        border-radius: 10px;
        text-align: center;
        line-height: 20px;
      }
    }

    .vip {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      align-items: center;
      width: 80%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -40%;
      background: #000;
      border-radius: 15px 15px 0 0;

      strong {
        color: yellow;
        font-size: 12px;
      }

      span {
        width: 80px;
        height: 20px;
        background: yellow;
        font-size: 12px;
        color: #fff;
        border-radius: 10px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
  .my-order{
      width 96%
      margin 20px 2%
  }
}
</style>