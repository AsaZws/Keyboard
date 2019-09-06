<template>
  <div class="keyboard-input">
    <div class="keyboard-input-padding">
      <input readonly="readonly"
        type="text"
        name="input"
        placeholder="请输入车牌"
        maxlength="8"
        :value="plateNumber"
        @click="keyboardInputClick">
    <!-- <span class="licence-plate">{{ plateNumber }}</span> -->
    </div>
  </div>
</template>

<script>
import vm from "@/event.js";

export default {
  name:'KeyboardInput',
  data() {
    return {
      plateNumber: ''
    }
  },
  methods: {
    // 键盘点击事件
    keyboardInputClick() {
      vm.$emit('inputClick', true)
    }
  },
  created() {
    // 接收数据
    vm.$on('plate', (data) => {
      data = data.join('');
      this.plateNumber = data
    })
  }
}
</script>

<style lang="scss">

.keyboard-input {
  margin-top: 48px;
  .keyboard-input-padding {
    padding: 0 40px;
    text-align: center;
    input {
      width: 100%;
      padding: 12px 0;
      font-size: 24px;
      // text-indent: 8px;
      letter-spacing: 8px;
      outline: none;
      border: 1px solid #acacac;
      border-radius: 8px;
    }
    input::-webkit-input-placeholder {
      color: #acacac;
      font-weight: 100;
      font-size: 20px;
    }
  }
}

</style>
