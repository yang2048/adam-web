---
access:
- login
---
<template>
  <my-pro fixed
          :logo="logo"
          :title="title"
          :menus="menus"
          :menu-props="{router: true}"
          navbar-theme="light"
          sidebar-theme="dark"
          version="4.x"
          :document-title="createDocumentTitle">

    <!-- 头部工具按钮 -->
    <template v-slot:actions>
      <UserAction :dropdown-items="dropdown"
                  username="Admin"
                  extra="超级管理员"
                  @command="handleUserCommand"
                  :avatar="{theme: 'primary'}"></UserAction>
      <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
      <IconAction icon="el-icon-setting" @click="settingVisible=true"></IconAction>
    </template>

    <!-- 加载子路由页面 -->
    <router-view></router-view>

    <el-drawer title="设置"
               size="320px"
               append-to-body
               direction="rtl"
               :visible.sync="settingVisible">
      <Setting></Setting>
    </el-drawer>

  </my-pro>
</template>

<script>
  import logo from '$ui/assets/logo.png'
  import {MyPro} from '$ui'
  import Setting from '@/components/Setting'

  const {IconAction, UserAction} = MyPro
  // 导航菜单数据
  const menus = [
    {
      icon: 'el-icon-s-home',
      text: '工作台',
      index: '/'
    },
    {
      icon: 'el-icon-s-marketing',
      text: '主题样式测试',
      index: '/theme'
    }
  ]
  export default {
    components: {
      MyPro,
      IconAction,
      UserAction,
      Setting
    },
    data() {
      return {
        logo: logo,
        title: '页面模板演示',
        settingVisible: false,
        menus: menus,
        dropdown: [
          {
            text: '个人信息',
            command: 'info'
          },
          {
            text: '修改密码',
            command: 'password'
          },
          {
            divided: true,
            text: '注销登录',
            command: 'logout'
          }
        ]
      }
    },
    methods: {
      // 页面标题构建函数，可根据匹配的路由返回响应的标题名称
      createDocumentTitle(matched) {
        return matched.meta.title || 'MyWeb 4.x'
      },
      handleUserCommand(cmd) {
        switch (cmd) {
          case 'logout':
            this.$access.logout()
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-pro {
    height: 100vh;
  }
</style>
