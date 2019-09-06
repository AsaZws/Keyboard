<template>
  <label class="child">
    <input :value="val" @input="$emit('update', $event.target.value)" />
  </label>
</template>
<script>
export default {
  props: ['val']
};
</script>