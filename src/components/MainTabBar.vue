<template>
    <tab-bar>
        <tab-bar-item path="/plateBox">
          <div slot="item-text">车牌框</div>
        </tab-bar-item>
        <tab-bar-item path="/fastPatment">
          <div slot="item-text">车牌input</div>
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
