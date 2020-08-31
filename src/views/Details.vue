<template>
  <div class="details">
    <van-nav-bar title="商品分类" left-arrow fixed placeholder z-index="10" @click-left="onClickLeft" />

    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in detailInfo.imgArr" :key="index">
        <img :src="item" alt />
      </van-swipe-item>
      <template #indicator>
        <div
          class="custom-indicator"
        >{{ current + 1 }}/{{ detailInfo.imgArr ? detailInfo.imgArr.length:0 }}</div>
      </template>
    </van-swipe>
    <!-- 商品介绍 -->
    <div class="details-name">
      <span>￥{{ detailInfo.currentPrice }}</span>
      <strong>普通价 ￥{{ detailInfo.originalPrice }}</strong>
      <h4>{{ detailInfo.productName }}</h4>
      <p>{{detailInfo.describe}}</p>
    </div>

    <!-- 商品选择 -->
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="cart-o" text="购物车"  />
  <van-goods-action-icon icon="shop-o" text="店铺"  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
   
  />
</van-goods-action>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: "",
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$store.dispatch(
      "getDetailInfo",
      this.$qs.stringify({ productId: this.id })
    );
  },
  computed: {
    ...mapState(["detailInfo"]),
  },
};
</script>
<style lang="stylus">
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.details {
  background: #eee;

  .details-name {
    padding-top: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 180px;
    align-items: space-between;
    padding-left: 20px;
    margin-bottom: 20px;

    span {
      font-size: 28px;
      color: orange;
    }

    strong {
      padding-top: 10px;
      font-size: 14px;
      font-weight: 400;
    }

    h4 {
      font-size: 16px;
      margin: 12px 0;
    }

    p {
      width: 100%;
      font-size: 12px;
    }
  }
}
</style>

