<template>
  <div class="keyboard-box">
    <ul class="keyboard-box-padding">
      <li v-for="(item, index) in plateNumber" 
        @click="keyboardLiClick(index)"
        :class="{liActive:index === liActiveIndex}">
        {{ item }}
       </li>
    </ul>
  </div>
</template>

<script>
import vm from "@/event.js";

export default {
  name:'KeyboardInput',
  props: {
    plates: {  // 父组件传过来的值
      type: String,
      required: true
    }
  },
  data() {
    return {
      plateNumber: [],
      liActiveIndex: 2
    }
  },
  methods: {
    keyboardLiClick(index) {
      // 发送车牌框点击的数据
      vm.$emit('inputClick', true);
      this.liActiveIndex = index;
      // 发送车牌框索引
      vm.$emit("liActiveIndex", this.liActiveIndex);
    },
    initPlates(plate) {
      this.plateNumber = new Array(8).join(',').split(',');  // 定义8位长度的空数组
      this.plateNumber = plate.split('').concat(this.plateNumber);  // 合并数组
      if(this.plateNumber.length > 8) {
        this.plateNumber.length = 8
      }
    }
  },
  created() {
    this.initPlates(this.plates);
    // 兄弟组件Keyboard传过来键盘当前点击的值
    vm.$on("theValue", (data) => {
      this.liActiveIndex ++;
      if(this.liActiveIndex > 7) {
        this.liActiveIndex = 8;
      }
      this.plateNumber[this.liActiveIndex-1] = data;
      // 当前车牌框里面的车牌号码传给父组件
      vm.$emit("plateBox", this.plateNumber);
    })
    vm.$on('delete', (data) => {
      if(this.liActiveIndex > 0) {
        this.liActiveIndex --;
      }
      this.plateNumber[this.liActiveIndex+1] = "";
      // 当前车牌框里面的车牌号码传给父组件
      vm.$emit("plateBox", this.plateNumber);
      // 发送车牌框索引
      vm.$emit("liActiveIndex", this.liActiveIndex);
    })
  }
}
</script>

<style lang="scss">

.keyboard-box {
  margin-top: 36px;
  .keyboard-box-padding {
    padding: 0 40px;
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    text-align: center;
    align-items: center;
    li {
      flex: 0 0 10.2%;
      height: 42px;
      line-height: 42px;
      margin: 0 auto;
      font-size: 18px;
      border: 1px solid #acacac;
      border-radius: 2px;
    }
    .liActive {
      border: 1px solid #108DE9;
      background-color: #f7f7f7;
    }
  }
}

</style>
