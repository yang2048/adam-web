import {set as setConfig} from '$ui/config'

// 写入运行时配置
setConfig({

  appName: 'suit',

  routePrefix: '/suit',

  // 路由模式
  router: {
    mode: 'hash',
    base: '/'
  },

  // 是否应用自动生成的路由配置
  autoRoutes: true,

  access: {
    // 启用请求权限控制
    axios: true,

    // 启用路由权限控制
    router: true,

    // 缓存存储方式 session 或 local
    storage: 'session',

    // 登录页面路径
    loginPath: '/login',

    // 权限不足页面路径
    authorizePath: '/403'
  },
  scale: {
    // 基准宽度
    width: 1920,
    // 基准高度
    height: 1080,
    // 是否禁用缩放功能
    disabled: true,
    // 是否锁定比例, 注意：不锁定比例，弹窗位置可能会出现偏移
    lock: true
  },
  analysis: false
})
