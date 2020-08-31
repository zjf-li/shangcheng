<template>
  <div class="classify">
<van-nav-bar title="商品分类" fixed placeholder z-index="10" />
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="#fff" placeholder="请输入搜索关键词" />
    <!-- 导航栏 -->
    <div class="nav-warp">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item"
          v-for="(item,index) in navArr"
          :key="index"
          @click="navClick(index)"
        />
      </van-sidebar>

      <div class="list-show">
        <van-grid :column-num="3">
          <van-grid-item
            v-for="item in classifyList"
            :key="item.productId"
            :icon="item.imgUrl"
            :text="item.title"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      id: 1,
      activeKey: 0,
      navArr: ["推荐分类", "全球奶粉", "尿不湿"],
    };
  },
  computed: {
    ...mapState(["classifyList"]),
  },
  methods: {
    navClick(index) {
      this.id = index+1;
      this.getNavList()
    },
    getNavList() {
      this.$store.dispatch(
        "getClassifyList",
        this.$qs.stringify({
          type: this.id,
        })
      );
    },
  },
  mounted() {
       this.getNavList()
  },
};
</script>
<style lang="stylus">
.classify {
  .nav-warp {
    display: flex;
    justify-content: space-between;

    .list-show {
      width: 100%;
      height: 200px;
    }
  }
}
</style>