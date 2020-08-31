<template>
  <div class="shop-cart">
    <van-nav-bar title="购物车" fixed placeholder z-index="10" class="van-hairline--bottom" />
    <span class="redact">编辑</span>

    <div>
      <van-checkbox v-model="checked">平台配送</van-checkbox>
    </div>
    <ul class="shop-item">
      <li>
        <div>
          <div class="shop-img">
            <van-checkbox v-model="checked"></van-checkbox>
            <img src="../assets/image/tx.jpg" alt />
          </div>

          <div class="shop-title">
            <h2>我是商品的标题</h2>
            <span>我是规格</span>
            <div class="price">
              <strong>115</strong>
              <van-stepper v-model="value" theme="round" button-size="22" disable-input />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      value: "",
    };
  },
  mounted() {
     const token = localStorage.getItem('token')
     console.log(token);
      this.$store.dispatch('getShopCart',this.$qs.stringify({
            token:token
      }))
  },
};
</script>
<style lang="stylus">
.shop-cart {
  background: #eee;

  .redact {
    display: block;
    width: 100%;
    text-align: right;
    height: 30px;
    color: orange;
    font-size: 14px;
    line-height: 30px;
    padding-right: 20px;
  }

  .shop-item {
    li {
      div {
        display: flex;
        .shop-img {
        img {
            width: 80px;
            height: 80px;
          }
        }

        .shop-title {
          display: flex;
          flex-flow: column;

          h2 {
            font-size: 16px;
          }

          span {
            font-size: 12px;
          }

          .price {
            display: flex;
            justify-content: space-around;
          }
        }
      }
    }

    .van-checkbox {
      background: #fff;
    }
  }
}
</style>