<template>
  <div id="fast-payment">
    <!-- 车牌框 -->
    <keyboard-box :plates="plates"></keyboard-box>
    <keyboard-button :plates="plates"></keyboard-button>
    <!-- 底部键盘 -->
    <Keyboard :plates="plates"></Keyboard>
  </div>
</template>

<script>
import Keyboard from 'views/keyboard/Keyboard';
import KeyboardBox from './keyboardBox/KerboardBox';
import KeyboardButton from 'views/keyboardButton/KeyboardButton'

export default {
  name: 'PlateBox',
  data() {
    return {
      plates: "粤B"
    }
  },
  components: {
    Keyboard,
    KeyboardBox,
    KeyboardButton
  }
}
</script>

<style lang="scss">

</style>