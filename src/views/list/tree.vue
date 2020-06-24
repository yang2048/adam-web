---
title: 树结构列表
---
<template>
  <my-wrapper title="树结构列表" fit>
    <el-row :gutter="14">
      <el-col :span="8" :xs="24">
        <my-panel :fit="myPro.fixed" shadow="never" title="组织机构">
          <template v-slot:tools>
            <el-input></el-input>
          </template>
        </my-panel>
      </el-col>
      <el-col :span="16" :xs="24">
        <my-panel fit  shadow="never"></my-panel>
      </el-col>
    </el-row>
  </my-wrapper>
</template>

<script>
  export default {
    inject: ['myPro']
  }
</script>

<style lang="scss" scoped>
  .el-row, .el-col {
    height: 100%;
  }
</style>
