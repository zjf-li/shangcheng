<template>
  <div id="app">
    <router-view  />
    <van-tabbar v-model="active" fixed placeholder route >
      <van-tabbar-item icon="home-o" to='/index'>主页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/classify'>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/shopcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="stylus"></style>
