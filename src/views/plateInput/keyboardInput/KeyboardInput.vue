<template>
  <div class="keyboard-input">
    <div class="keyboard-input-padding">
      <input readonly="readonly"
        unselectable="on"
        onfocus="this.blur();"
        type="text"
        name="input"
        placeholder="请输入车牌"
        maxlength="8"
        :value="plateNumber"
        @click="keyboardInputClick">
    </div>
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
      plateNumber: this.plates
    }
  },
  methods: {
    keyboardInputClick() {
      // 发送车牌框点击的数据
      vm.$emit('inputClick', true);
    }
  },
  created() {
    // 兄弟组件Keyboard传过来的值
    vm.$on('theValue', (data) => {
      if(this.plateNumber.length < 8) {
        this.plateNumber += data;
      }
      // 当前车牌框里面的车牌号码传给父组件
      vm.$emit("plateInput", this.plateNumber);
    })
    vm.$on('delete', (data) => {
      this.plateNumber = data.join('');
      // 当前车牌框里面的车牌号码传给父组件
      vm.$emit("plateInput", this.plateNumber);
    })
  }
}
</script>

<style lang="scss">

.keyboard-input {
  margin-top: 36px;
  .keyboard-input-padding {
    padding: 0 40px;
    text-align: center;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 22px;
      letter-spacing: 8px;
      outline: none;
      border: 1px solid #acacac;
      border-radius: 4px;
    }
    input::-webkit-input-placeholder {
      color: #acacac;
      font-weight: 100;
      font-size: 20px;
    }
  }
}

</style>
