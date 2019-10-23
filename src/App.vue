<template>
  <div id="app">
    <main-tab-bar />
    <!-- 快速缴费 -->
    <!-- <fast-payment /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import FastPayment from '@/views/fastPayment/FastPayment';
import MainTabBar from '@/components/MainTabBar';

export default {
  name: 'app',
  components: {
    MainTabBar,
    // FastPayment,
  }
}
</script>

<style lang="scss">
  @import url("assets/css/base.css");
</style>
