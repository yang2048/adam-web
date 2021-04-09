import { set as setConfig } from '$ui/config'
import { Message } from 'element-ui';

// 写入运行时配置
setConfig({

  // 路由模式
  router: {
    mode: 'history',
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
    authorizePath: '/403',
    
    // 请求拦截函数，axios=true 有效
    request: ({access}, options, config) => {
      // 在这里实现对请求前的处理
      return config
    },
    
    // 请求响应成功拦截函数，axios=true 有效
    response: ({ $router }, options, res) => {
      if (res.data.code !== 0) {
        Message.error(res.data.msg);
      }
      return res
    },
    // 请求响应失败拦截函数，axios=true 有效
    responseFail: (res) => {
      return res
    }
  },
  /**
   * 属性名映射
   */
   keys: {
    code: 'code', // 响应状态码 
    data: 'data', // 响应数据
    message: 'msg', // 错误信息
    total: 'total', // 记录数
    list: 'records', // 列表数据
    page: 'page', // 页码
    limit: 'limit', // 每页几条
    pages: 'pages' // 页数
  }
})

