<template>
  <div class="keyboard-box">
    <ul class="keyboard-box-padding">
      <li v-for="(item, index) in plateNumber" 
      @click="keyboardBoxClick">
        {{ item.plate }}
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
      plateNumber: [
        {plate: ''},
        {plate: ''},
        {plate: ''},
        {plate: ''},
        {plate: ''},
        {plate: ''},
        {plate: ''},
        {plate: ''},
      ]
    }
  },
  methods: {
    keyboardBoxClick() {
      // 发送车牌框点击的数据
      vm.$emit('inputClick', true);
    }
  },
  created() {
    // 兄弟组件Keyboard传过来的值
    vm.$on('plate', (data) => {
      data = data.join('');
      this.plateNumber = data;
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
  }
}

</style>
