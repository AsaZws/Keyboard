<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name: "TabBar"
}
</script>
<style scoped>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.1);
}
</style>