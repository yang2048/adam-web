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
    <my-container shadow>
      <my-table toolbar title="基本列表">
        <template v-slot:actions>
          <my-form class="filter-form"
                   :model="query"
                   @change="handleFilterChange"
                   inline
                   :footer="null"
                   size="small">
            <my-radio name="state"
                      button
                      :options="[{label:'全部',value:1},{label:'进行中',value:2},{label:'等待中',value:3}]"></my-radio>
            <my-input name="keyword" placeholder="输入关键字" :props="{prefixIcon:'el-icon-search', clearable:true}">
            </my-input>
          </my-form>
        </template>

        <template v-slot:prepend>
          <div class="add-btn"><i class="el-icon-plus"></i>添加</div>
        </template>
      </my-table>
    </my-container>
  </my-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        query: {
          state: 1,
          keyword: ''
        }
      }
    },
    methods: {
      handleFilterChange(model) {
        console.log(model)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .data-stat {
    .el-col {
      text-align: center;
      border-left: 1px solid $--color-divider;

      &:first-child {
        border-left: none;
      }
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

  .filter-form {
    /deep/ {
      .el-form-item {
        margin-bottom: 0 !important;
      }

      .my-radio {
        transform: translateY(-2px);
      }
    }
  }

  .add-btn {
    border: 1px dashed $--color-divider;
    padding: 5px;
    text-align: center;
    margin: 14px 0;
    cursor: pointer;

    i {
      margin-right: 10px;
    }

    &:hover {
      border-color: $--link-hover-color;
    }
  }
</style>
