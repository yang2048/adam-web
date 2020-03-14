/**
 * 初始化运行时配置
 */
import './config'

/**
 * 获取全局运行时配置
 */
import globalConfig from '$ui/config'

/**
 * 主应用增强
 */
import {
  Vue,
  Vuex,
  Router,
  getView,
  progress,
  registerApps,
  appRender,
  appStart,
  Access
} from '$ui/master'


/**
 * 项目自定义的路由, 手动写的
 */
import routesFactory from '@/router/routes'

/**
 * 按views目录下文件自动生成的路由
 */
import autoRoutesFactory from '$my/routes/index'

/**
 * 项目Vuex实例参数选项
 */
import vuexOptions from '@/store/index'

/**
 * 前端微服务的子应用容器组件，访问的路由与注册的子应用匹配时才加载
 */
import AppMaster from './AppMaster'

/**
 * 需要注册的子应用列表
 */
import apps from './apps'

/**
 * 项目样式文件
 */
import '@/style/index.scss'

/**
 * 全局共享数据 Vuex实例
 */
const store = new Vuex.Store(vuexOptions)

/**
 * 如果启用了自动创建路由功能，获取路由配置信息
 * @type {Array}
 */
const autoRoutes = globalConfig.autoRoutes ? autoRoutesFactory({get: getView}) : []

/**
 * 项目手工配置的路由与自动路由合并
 */
const routes = routesFactory({get: getView}).concat(autoRoutes)

/**
 * 实例化路由
 * @type {Router}
 */
const router = new Router({
  routes,
  ...globalConfig.router
})

/**
 * 注册权限控制实例
 */
const access = new Access(Vue, {
  ...globalConfig.access,
  $router: router,
  progress
})

/**
 * 模拟数据，生产环境不加载模拟数据
 */
if (process.env.NODE_ENV !== 'production' && globalConfig.mock) {
  require('@/mock/index')
}

/**
 * 应用渲染需要用到的参数选项
 * @type {*}
 */
const params = {
  el: '#app',
  store,
  router,
  access,
  AppMaster,
  apps
}


/**
 * 注册子应用
 */
registerApps(params)

/**
 * 渲染主应用
 */
appRender(params, {loading: false})

/**
 * 启动前端微服务
 */
appStart({prefetch: true, jsSandbox: true})



