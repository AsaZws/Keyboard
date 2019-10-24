<template>
  <div id="app">
    <!-- 头部导航 -->
    <main-tab-bar />
    <!-- 路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/MainTabBar';

export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style lang="scss">
  @import url("assets/css/base.css");
</style>
