---
title: 首页1-1
---
<template>
  <div class="hello">
    <el-button type="primary" @click="changeTheme('default')">Default</el-button>
    <el-button type="primary" @click="changeTheme('dark')">Dark</el-button>
    <my-panel title="Title"></my-panel>
  </div>
</template>

<script>
  import Skin from 'ui/utils/skin'


  export default {
    mixins: [Skin],
    mounted() {
      this.$log.tip('ddd', 'hollo')
    }
  }
</script>

<style lang="scss" scoped>


</style>
