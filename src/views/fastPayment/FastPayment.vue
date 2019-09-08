<template>
  <div id="fast-payment">
    <!-- 输入框 -->
    <keyboard-input :plates="plates"></keyboard-input>
    <!-- 底部键盘 -->
    <keyboard :plates="plates"></keyboard>
  </div>
</template>

<script>
import KeyboardInput from './keyboardInput/KeyboardInput'
import Keyboard from './keyboard/Keyboard'

export default {
  name: 'FastPayment',
  data() {
    return {
      plates: '粤B'
    }
  },
  components: {
    KeyboardInput,
    Keyboard,
  }
}
</script>

<style lang="scss">

</style>
