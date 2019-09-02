<template>
  <div class="keyboard">
    <div class="keyboard-close">
      
    </div>
    <div class="place-letter">
      <ul>
        <li v-for="(item, index) in keyboard">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var _PVS = "京津晋冀蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼渝川贵云藏陕甘青宁新";
var _NUM = "1234567890QWERTYUP港澳ASDFGHJKL学ZXCVBNM警";
export default {
  name:'Keyboard',
  data: function() {
    return {
      keyboard: _NUM
    }
  }
}
</script>

<style scoped>

</style>