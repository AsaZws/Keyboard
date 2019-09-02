<template>
  <div class="keyboard-input">
    <div class="keyboard-input-padding">
      <input type="text" 
        name="input" 
        placeholder="请输入车牌" 
        maxlength="8" 
        value="">
    </div>
  </div>
</template>

<script>
export default {
  name:'KeyboardInput'
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
