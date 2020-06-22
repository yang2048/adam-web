---
title: 标准列表
---
<template>
  <my-wrapper title="标准列表" fit>
    <my-container shadow class="data-stat">
      <el-row>
        <el-col :span="8">
          <span class="title">我的代办</span>
          <span class="info">8个任务</span>
        </el-col>
        <el-col :span="8">
          <span class="title">本周任务平均处理时间</span>
          <span class="info">32分钟</span>
        </el-col>
        <el-col :span="8">
          <span class="title">本周完成任务数</span>
          <span class="info">24个任务</span>
        </el-col>
      </el-row>
    </my-container>
    <my-container shadow></my-container>
  </my-wrapper>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .data-stat {
    .el-col {
      text-align: center;
    }

    .title {
      color: $--color-placeholder;
      display: block;
      margin-bottom: 8px;
    }

    .info {
      color: $--color-primary-text;
      display: block;
      font-size: $--font-size-large;
      padding: 5px;
    }
  }
</style>
