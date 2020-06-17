<template>
  <my-wrapper fit title="主题样式预览测试">
    <template v-slot:actions>
      <el-radio-group size="small" v-model="type">
        <el-radio-button label="/theme/">ElementUI</el-radio-button>
        <el-radio-button label="/theme/ui/">自研组件</el-radio-button>
        <!--        <el-radio-button label="/theme/pro">Pro</el-radio-button>-->
      </el-radio-group>

      <!--      <el-radio-group size="small" v-model="theme" style="margin-left:20px;">-->
      <!--        <el-radio-button label="default">默认</el-radio-button>-->
      <!--        <el-radio-button label="dark">深色</el-radio-button>-->
      <!--        <el-radio-button label="black">暗黑</el-radio-button>-->
      <!--      </el-radio-group>-->
    </template>
    <router-view></router-view>
  </my-wrapper>
</template>

<script>
  import skin, {get as getTheme} from '$ui/utils/skin'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'

  export default {
    mixins: [skin()],
    data() {
      return {
        theme: getTheme() || 'default',
        type: '/theme/',
        invert: false
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
      type(val) {
        this.$router.push(val)
      },
      invert(val) {
        val ? addClass(document.body, 'body-invert') : removeClass(document.body, 'body-invert')
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
