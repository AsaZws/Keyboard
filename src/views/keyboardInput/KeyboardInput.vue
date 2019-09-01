<template>
  <div class="plate">
    <input type="text" 
      name="input" 
      placeholder="请输入车牌" 
      maxlength="8" 
      value="粤B">
  </div>
</template>

<script>
export default {
  name:'KeyboardInput'
}
</script>

<style lang="scss">

.plate {
  margin-top: 2em;
  input {
    width: 100%;
    height: 1.5em;
    font-size: 1.5em;
    outline: none;
    border-bottom: 1px solid #8c8c8c;
  }
  .plate input::-webkit-input-placeholder {
    color: #8c8c8c;
  }
}

</style>
