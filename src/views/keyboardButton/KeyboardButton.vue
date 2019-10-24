<template>
  <div class="keyboard-button">
    <a href="#" class="query-button">查询</a>
  </div>
</template>

<script>

export default {
  name: 'keyboardButton'
}
</script>

<style lang="scss">
.keyboard-button {
  padding: 0 16px;
  margin-top: 24px;
  .query-button {
    display: block;
    height: 47px;
    line-height: 47px;
    text-align: center;
    background-color: #2898ea;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
  }
  .query-button:active {
    background: #3bacff;
  }
}
</style>
