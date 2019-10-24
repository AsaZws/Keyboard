<template>
    <tab-bar>
        <tab-bar-item path="/plateBox">
          <div slot="item-text">车牌框box</div>
        </tab-bar-item>
        <tab-bar-item path="/plateInput">
          <div slot="item-text">车牌框input</div>
        </tab-bar-item>
    </tab-bar>
</template>
<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style scoped>
</style>
