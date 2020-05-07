<template>
  <div class="app-master">
    <!-- 加载子应用容器 -->
    <div v-if="isMatchApp" id="app-container" class="app-container"></div>
    <!-- 匹配不到子应用渲染主应用路由页面 -->
    <template v-else>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </template>
  </div>
</template>

<script>
  import Scale from '$ui/utils/scale'

  export default {
    mixins: [Scale],
    props: {
      isMatchApp: Boolean
    }
  }
</script>

