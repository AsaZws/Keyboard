<template>
  <div id="fast-payment">
    <!-- 车牌框 -->
    <keyboard-box :plates="plates"></keyboard-box>
    <!-- 点击按钮 -->
    <keyboard-button :backgroundColor="backgroundColor" :class="{noClicks: isNoClicks}" @click.native="queryClick">
      <span slot="item-text">查询</span>
    </keyboard-button>
    <!-- 底部键盘 -->
    <Keyboard :plates="plates"></Keyboard>
  </div>
</template>

<script>
import vm from "@/event.js";

import Keyboard from 'views/keyboard/Keyboard';
import KeyboardBox from './keyboardBox/KeyboardBox';
import KeyboardButton from 'views/keyboardButton/KeyboardButton'

export default {
  name: 'PlateBox',
  data() {
    return {
      plates: "粤B", // 初始化默认地区车牌号
      isNoClicks: true,  // 默认不让点击
      backgroundColor: '#2898ea'  // 传给子组件按钮的颜色,不传使用默认的蓝色
    }
  },
  components: {
    Keyboard,  // 车牌键盘
    KeyboardBox,  // 车牌框box
    KeyboardButton  // 查询按钮
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
    vm.$on('plateBox', (data) => {
      data = data.join('');
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