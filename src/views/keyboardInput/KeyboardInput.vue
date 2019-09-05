<template>
  <div class="keyboard-input">
    <div class="keyboard-input-padding">
      <input readonly="readonly"
        type="text"
        name="input"
        placeholder="请输入车牌"
        maxlength="8"
        v-model="plateNumber">
    </div>
  </div>
</template>

<script>
import vm from "@/event.js";

export default {
  name:'KeyboardInput',
  data() {
    return {
      plateNumber: '粤B'
    }
  },
  created() {
    // 兄弟组件通信
    vm.$on('plate', (plate) => {
      plate = plate.join('');
      this.plateNumber = plate
    })
  }
}
</script>

<style lang="scss">

.keyboard-input {
  margin-top: 48px;
  .keyboard-input-padding {
    padding: 0 32px;
    input {
      width: 100%;
      height: 32px;
      padding: 2px 8px;
      font-size: 18px;
      outline: none;
      border-bottom: 1px solid #acacac;
    }
    input::-webkit-input-placeholder {
      color: #acacac;
      font-weight: 200;
    }
  }
}

</style>
