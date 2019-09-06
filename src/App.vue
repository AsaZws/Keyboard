<template>
  <div id="app">
    <!-- 输入框 -->
    <keyboard-input />
    <!-- 底部键盘 -->
    <keyboard/>
  </div>
</template>

<script>
import KeyboardInput from '@/views/keyboardInput/KeyboardInput'
import Keyboard from '@/views/keyboard/Keyboard'

export default {
  name: 'app',
  components: {
    KeyboardInput,
    Keyboard,
  }
}
</script>

<style lang="scss">
  @import url("assets/css/base.css");
</style>
