---
title: 主题样式测试
---
<template>
  <my-wrapper fit title="主题样式预览测试3">
    <template v-slot:actions>
      <el-radio-group size="small" v-model="type">
        <el-radio-button label="/suit">ElementUI</el-radio-button>
        <el-radio-button label="/suit/ui">自研组件</el-radio-button>

      </el-radio-group>

    </template>
    <router-view></router-view>
  </my-wrapper>
</template>

<script>
  import skin from '$ui/utils/skin'

  export default {
    mixins: [skin('suit', true)],
    data() {
      return {
        type: this.$route.path
      }
    },
    watch: {
      type(val) {
        this.$router.push(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-row, .my-wrapper /deep/ .el-row {
    margin-bottom: 10px;
  }
</style>

<style>
  body.body-invert {
    filter: invert(90%) brightness(1.2) hue-rotate(180deg);
  }
</style>
