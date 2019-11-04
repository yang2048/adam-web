// 框架增强
import {Vue, Vuex, Router, getView} from '@xdh/my/core/enhance'

// 项目自定义的路由配置
import routesFactory from '@/router/routes'

// 自动生成的路由配置
import autoRoutesFactory from '$my/routes/index'

// 项目Vuex实例参数选项
import vuexOptions from '@/store/index'

import './style/index.scss'

import App from './App'

const store = new Vuex.Store(vuexOptions)

const autoRoutes = autoRoutesFactory({get: getView})

// 项目配置的路由与自动路由合并
const routes = routesFactory({get: getView}).concat(autoRoutes)

const router = new Router({routes})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
