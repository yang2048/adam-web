---
title: 卡片列表
---
<template>
  <my-wrapper title="卡片列表" fit>
    <template v-slot:extra>
      卡片类型的列表，配合栅格实现响应式布局。
    </template>
    <template v-slot:actions>
      <el-button type="primary" size="medium" icon="el-icon-plus">新增</el-button>
    </template>
    <my-card-list :loader="loader"
                  pager
                  :page-size="12"
                  :columns="{xs:1,sm:1,md:2,lg:2,xl:3,xxl:4}">
      <my-panel slot-scope="{item}"
                shadow="hover"
                :actions="actions"
                :header="false">
        <my-corner-mark :type="{ '逃': 'danger', '毒': 'warning'}[item.label]">{{item.label}}</my-corner-mark>
        <div class="data-item">
          <el-image :src="item.avatar" fit="cover"></el-image>
          <div class="text">
            <my-title :level="3">{{item.name}}</my-title>
            <my-paragraph ellipsis :rows="3">
              {{item.info}}
            </my-paragraph>
          </div>
        </div>
      </my-panel>
    </my-card-list>
  </my-wrapper>
</template>

<script>
  import user from '$my/code/mixin/user'

  export default {
    mixins: [user],
    data() {
      return {
        actions: [
          {
            text: '查看',
            icon: 'el-icon-view'
          },
          {
            text: '编辑',
            icon: 'el-icon-edit'
          },
          {
            text: '删除',
            icon: 'el-icon-delete'
          }
        ]
      }
    },
    methods: {
      loader(page, limit) {
        return this.fetchUser({
          data: {
            page,
            limit
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-item {
    height: 100px;

    .el-image {
      width: 120px;
      height: 100px;
      float: left;
    }

    .my-title {
      margin-top: 0;
    }

    .my-paragraph {
      margin-bottom: 0;
    }

    .text {
      padding-left: 130px;
    }
  }
</style>
