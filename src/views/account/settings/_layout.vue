<template>
  <my-wrapper title="个人设置" fit>
    <my-container fit>
      <el-row>
        <el-col :span="6">
          <el-tabs class="menu-tab" tab-position="left" style="height: 100%;">
            <el-tab-pane label="用户管理"></el-tab-pane>
            <el-tab-pane label="配置管理"></el-tab-pane>
            <el-tab-pane label="角色管理"></el-tab-pane>
            <el-tab-pane label="定时任务补偿"></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="18"></el-col>
      </el-row>

    </my-container>
  </my-wrapper>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .el-row, .el-col {
    height: 100%;
  }

  .menu-tab {
    margin-left: -14px;

    /deep/ {
      .el-tabs__header {
        width: 100%;
      }

      .el-tabs__item {
        text-align: left !important;
      }

      .el-tabs__item.is-active {
        background: $--color-primary-light-10;
      }

      .el-tabs__active-bar {
        width: 4px !important;
      }
    }
  }
</style>
