<template>
  <div id="fast-payment">
    <!-- 输入框 -->
    <keyboard-input :plates="plates"></keyboard-input>
    <!-- 底部键盘 -->
    <keyboard/>
  </div>
</template>

<script>
import KeyboardInput from './keyboardInput/KeyboardInput'
import Keyboard from './keyboard/Keyboard'

export default {
  name: 'FastPayment',
  // props: {
  //   plates: {
  //     type: String,
  //     default: '粤B'
  //   }
  // },
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
