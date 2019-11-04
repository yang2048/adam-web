/**
 * 路由导航守卫
 * @function
 * @param {VueRouter} router 路由实例
 * @param {VueRouter} store 全局状态
 * @param {VueRouter} progress 进度条实例
 */

export default function ({ router, store, progress }) {
  /**
   * 全局前置守卫
   */
  router.beforeEach((to, from, next) => {
    progress.start()
    next()
    
  })
  
  /**
   * 全局后置守卫
   */
  router.afterEach((to, from) => {
    progress.done()
  })
  
}


