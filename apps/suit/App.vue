<template>
  <div class="app-child">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  import Scale from '$ui/utils/scale'

  export default {
    mixins: [Scale]
  }
</script>
