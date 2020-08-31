<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="首页" fixed placeholder z-index="10" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in IndexBannerList" :key="index">
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 热销推荐 -->
    <van-grid :border="false">
      <van-grid-item
        v-for="(item,index) in wealList"
        :key="index"
        :icon="item.src"
        :text="item.text"
      />
    </van-grid>
    <!-- 精选版块 -->
    <div class="sift">
      <div>
        <h2>全球奶粉</h2>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </div>
      <div>
        <h2>尿不湿</h2>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </div>
      <div>
        <h2>全球奶粉</h2>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </div>
      <div>
        <h2>尿不湿</h2>
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
      </div>
    </div>
    <div class="recommend">
      <van-card
      v-for="(item) in IndexGoodsList" 
      :key='item.productId'
        :origin-price="item.originalPrice"
        :price="item.currentPrice"
        desc="描述信息"
        :title="item.productName"
        :thumb="item.imgUrl"
        @click="goodsInfo(item.productId)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      wealList: [
        {
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          text: "每日福利",
        },
        {
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          text: "热销榜",
        },
        {
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          text: "皮鲁甄选",
        },
        {
          src: "https://img.yzcdn.cn/vant/apple-1.jpg",
          text: "会员中心",
        },
      ],
      page: 1,
      count: 5,
    };
  },
  computed: {
    ...mapState(["IndexBannerList","IndexGoodsList"]),
  },
  mounted() {
    this.$store.dispatch("getBanner");
    this.getList()
  },
  methods: {
   async getList() {
     await this.$store.dispatch("getGoodsList", {
        count: this.count,
        page: this.page,
      });
      this.page++;
    },
    goodsInfo(id){
        this.$router.push('/detail/'+ id)
    }
  },
};
</script>
<style lang="stylus">
.sift {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 170px;
    height: 130px;
    background: red;
    font-size: 10px;
    display: flex;

    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>