<template>
  <div class="keyboard-button">
    <a href="#" class="query-button" :class="{noClicks: isNoClicks}" @click="queryClick">查询</a>
  </div>
</template>

<script>
import vm from "@/event.js";

export default {
  name: 'keyboardButton',
  props: {
    plates: {  // 这个是父组件传过来的值
      type: String,
      required: true
    }
  },
  data() {
    return {
      plateNumber: this.plates,
      isNoClicks: true
    }
  },
  methods: {
    queryClick() {
      // 点击按钮
      console.log(this.plateNumber);
    },
    initButton() {
      // 初始化按钮是否能点击
      if (this.plateNumber.length < 7) {
        this.isNoClicks = true
      } else {
        this.isNoClicks = false
      }
    }
  },
  created() {
    // 兄弟组件Keyboard传过来的值
    vm.$on('plateBox', (data) => {
      data = data.join('');
      this.plateNumber = data;
      this.initButton();
      console.log(this.plateNumber);
    })
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
  .noClicks {
    pointer-events: none;
    opacity: .6;
  }
  .query-button:active {
    background: #3bacff;
  }
}
</style>
