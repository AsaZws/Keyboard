<template>
  <div>
    <!-- 输入框 -->
    <keyboard-input :plates="plates"></keyboard-input>
    <!-- 点击按钮 -->
    <keyboard-button :backgroundColor="backgroundColor" :class="{noClicks: isNoClicks}" @click.native="queryClick">
      <span slot="item-text">查询车牌</span>
    </keyboard-button>
    <!-- 底部键盘 -->
    <keyboard :plates="plates"></keyboard>
  </div>
</template>

<script>
import vm from "@/event.js";

import KeyboardInput from './keyboardInput/KeyboardInput';
import Keyboard from 'views/keyboard/Keyboard';
import KeyboardButton from 'views/keyboardButton/KeyboardButton';

export default {
  name: 'PlateInput',
  data() {
    return {
      plates: '粤B',
      isNoClicks: true,  // 默认不让点击
      backgroundColor: '#2898ea'  // 传给子组件按钮的颜色,不传使用默认的蓝色
    }
  },
  components: {
    KeyboardInput,
    Keyboard,
    KeyboardButton
  },
  methods: {
    queryClick() {
      // 点击按钮
      console.log(this.plates);
    },
    initButton(num) {
      // 初始化按钮是否能点击
      if (num.length < 7) {
        this.isNoClicks = true
      } else {
        this.isNoClicks = false
      }
    }
  },
  created() {
    // 子组件keyboardBox传过来的值
    vm.$on('plateInput', (data) => {
      this.plates = data;
      this.initButton(this.plates);
    })
  }
}
</script>

<style lang="scss">
  .noClicks {
    pointer-events: none;
    opacity: .6;
  }
</style>
