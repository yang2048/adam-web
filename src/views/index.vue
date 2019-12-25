---
title: 首页1-1
---
<template>
  <div class="hello">
    <my-panel title="Title"></my-panel>
  </div>
</template>

<script>

  export default {
    mounted() {
      this.$log.tip('ddd', 'hollo')
    }
  }
</script>

<style lang="scss" scoped>


</style>
