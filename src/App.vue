<template>
  <div id="app">
    <keyboard-input/>
  </div>
</template>

<script>
import KeyboardInput from '@/views/keyboardInput/KeyboardInput'

export default {
  name: 'app',
  components: {
    KeyboardInput
  }
}
</script>

<style lang="scss">
  @import url("assets/css/base.css");
</style>
