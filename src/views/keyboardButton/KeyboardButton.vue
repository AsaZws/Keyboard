<template>
  <div class="keyboard-button">
    <a href="#" class="query-button" :style="{background: this.backgroundColor}">
      <slot name="item-text"></slot>
    </a>
  </div>
</template>

<script>

export default {
  name: 'keyboardButton',
  props: {
    backgroundColor: String  // 这个是父组件传过来的按钮背景颜色
  }
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
    opacity: 0.8;
  }
}
</style>
