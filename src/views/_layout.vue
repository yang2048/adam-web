---
access:
- login
---
<template>
  <div class="wrapper">
    <my-pro :fixed="setting.fixed"
            :logo="logo"
            :title="title"
            :mode="setting.layout"
            :menus="menus"
            :menu-props="{router: true}"
            v-bind="colorTheme"
            :collapsible="setting.collapsible"
            :rainbow="setting.rainbow"
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

    </my-pro>
    <el-drawer title="设置"
               size="320px"
               append-to-body
               direction="rtl"
               :visible.sync="settingVisible">
      <Setting :config="setting" @change="handleSettingChange"></Setting>
    </el-drawer>
  </div>
</template>

<script>
  import logo from '$ui/assets/logo.png'
  import {MyPro} from '$ui'
  import Setting from '@/components/Setting'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'
  import skin from '$ui/utils/skin'
  import {isEqual} from '$ui/utils/util'
  import {get, save, LOCAL} from '$ui/utils/storage'

  const {IconAction, UserAction} = MyPro
  const SETTING_CACHE_KEY = '__MY_PRO_CONFIG__'
  const defaultSetting = {
    skin: 'default',
    layout: 'sidebar',
    color: 'simple',
    fixed: false,
    collapsible: true,
    tab: false,
    breadcrumb: false,
    rainbow: false,
    invert: false
  }
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
    mixins: [skin()],
    components: {
      MyPro,
      IconAction,
      UserAction,
      Setting
    },
    data() {
      return {
        setting: null,
        logo: logo,
        title: 'MyUI演示系统',
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
    computed: {
      colorTheme() {
        const {color, layout, skin} = this.setting
        const map = {
          simple: 'light',
          tech: 'dark',
          pro: 'black'
        }
        if (layout === 'sidebar') {
          return {
            sidebarTheme: map[color],
            navbarTheme: skin === 'dark' ? 'dark' : 'light'
          }
        }
        if (layout === 'both') {
          return {
            navbarTheme: map[color],
            sidebarTheme: 'light'
          }
        }
        switch (color) {
          case 'simple':
            return {navbarTheme: 'light', sidebarTheme: 'light'}
          case 'tech':
            return {navbarTheme: 'dark', sidebarTheme: 'dark'}
          case 'pro':
            return {navbarTheme: 'black', sidebarTheme: 'black'}
          default:
            return {navbarTheme: 'light', sidebarTheme: 'light'}
        }

      }
    },
    watch: {
      setting(val) {
        this.changeTheme(val.skin)
        this.invert(val.invert)
        // console.log(val)
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
      },
      handleSettingChange(setting) {
        if (isEqual(setting, this.setting)) return
        this.setting = {...setting}
        save(SETTING_CACHE_KEY, setting, LOCAL)

      },
      invert(val) {
        val ? addClass(document.body, 'body-invert') : removeClass(document.body, 'body-invert')
      }
    },
    created() {
      this.setting = get(SETTING_CACHE_KEY, LOCAL) || defaultSetting
    }
  }
</script>

<style lang="scss" scoped>

</style>

<style>
  body.body-invert {
    filter: invert(90%) brightness(1.2) hue-rotate(180deg);
  }
</style>
