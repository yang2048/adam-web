<template>
  <my-container>
    <el-divider content-position="left">风格</el-divider>
    <el-radio-group class="three-columns" size="small" v-model="theme">
      <el-radio-button label="default">亮色</el-radio-button>
      <el-radio-button label="dark">深蓝</el-radio-button>
      <el-radio-button label="black">暗黑</el-radio-button>
    </el-radio-group>

    <el-divider content-position="left">布局</el-divider>
    <el-radio-group class="three-columns" v-model="mode" size="small">
      <el-radio-button label="sidebar">左右</el-radio-button>
      <el-radio-button label="navbar">上下</el-radio-button>
      <el-radio-button label="both">上下 + 左右</el-radio-button>
    </el-radio-group>

    <el-divider content-position="left">配色</el-divider>
    <el-radio-group class="three-columns" size="small" v-model="sidebarTheme">
      <el-radio-button label="light">简洁</el-radio-button>
      <el-radio-button label="dark">科技</el-radio-button>
      <el-radio-button label="primary">专业</el-radio-button>
    </el-radio-group>


    <el-divider content-position="left">其他设置</el-divider>
    <div class="other">
      <my-float>
        <my-float-item>固定菜单栏</my-float-item>
        <my-float-item float="right">
          <el-switch v-model="fixed"></el-switch>
        </my-float-item>
      </my-float>
      <my-float>
        <my-float-item>开启折叠</my-float-item>
        <my-float-item float="right">
          <el-switch v-model="fixed"></el-switch>
        </my-float-item>
      </my-float>
      <my-float>
        <my-float-item>开启导航Tab</my-float-item>
        <my-float-item float="right">
          <el-switch v-model="fixed"></el-switch>
        </my-float-item>
      </my-float>
      <my-float>
        <my-float-item>开启面包屑</my-float-item>
        <my-float-item float="right">
          <el-switch v-model="fixed"></el-switch>
        </my-float-item>
      </my-float>
      <my-float>
        <my-float-item>彩虹边框</my-float-item>
        <my-float-item float="right">
          <el-switch v-model="fixed"></el-switch>
        </my-float-item>
      </my-float>
    </div>
  </my-container>
</template>

<script>
  import skin, {get as getTheme} from '$ui/utils/skin'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'

  export default {
    mixins: [skin()],
    data() {
      return {
        theme: getTheme() || 'default',
        invert: false,
        mode: 'sidebar',
        sidebarTheme: 'light',
        navbarTheme: 'light',
        fixed: false
      }
    },
    watch: {
      theme(val) {
        if (val === 'black') {
          this.changeTheme('default')
          this.invert = true
        } else {
          this.changeTheme(val)
          this.invert = false
        }
      },
      invert(val) {
        val ? addClass(document.body, 'body-invert') : removeClass(document.body, 'body-invert')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .three-columns {
    width: 100%;

    /deep/ {
      .el-radio-button {
        width: 33.33%;
      }

      .el-radio-button__inner {
        width: 100%;
      }
    }
  }

  .my-float {

    padding: 8px;

    &:hover {
      background: $--color-table-stripe;
      border-radius: 4px;
    }
  }

  .el-divider {
    margin-top: 50px;

    &:first-child {
      margin-top: 20px;
    }
  }
</style>

<style>
  body.body-invert {
    filter: invert(90%) brightness(1.2) hue-rotate(180deg);
  }
</style>
