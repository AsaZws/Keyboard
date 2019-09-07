<template>
  <div id="app">
    <!-- 快速缴费 -->
    <fast-payment />
  </div>
</template>

<script>
import FastPayment from '@/views/fastPayment/FastPayment'

export default {
  name: 'app',
  components: {
    FastPayment,
  }
}
</script>

<style lang="scss">
  @import url("assets/css/base.css");
</style>
