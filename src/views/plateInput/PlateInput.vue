<template>
  <div>
    <!-- 输入框 -->
    <keyboard-input :plates="plates"></keyboard-input>
    <keyboard-button :plates="plates"></keyboard-button>
    <!-- 底部键盘 -->
    <keyboard :plates="plates"></keyboard>
  </div>
</template>

<script>
import KeyboardInput from './keyboardInput/KeyboardInput';
import Keyboard from './keyboard/Keyboard';
import KeyboardButton from 'views/keyboardButton/KeyboardButton';

export default {
  name: 'PlateInput',
  data() {
    return {
      plates: '粤B'
    }
  },
  components: {
    KeyboardInput,
    Keyboard,
    KeyboardButton
  }
}
</script>

<style lang="scss">

</style>
