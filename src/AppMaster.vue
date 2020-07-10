<template>
  <div id="app-master" class="app-master">
    <keep-alive>
      <router-view v-if="keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>
  </div>
</template>

<script>
  import Scale from '$ui/utils/scale'

  export default {
    mixins: [Scale],
    provide() {
      return {
        appMaster: this
      }
    },
    data() {
      this.actions = null
      return {}
    },
    props: {
      matchApp: {
        type: Object
      },
      state: {
        type: Object
      },
      initGlobalState: Function
    },
    computed: {
      keepAlive() {
        const matched = this.$route.matched[0]
        if (!matched) return false
        return !!matched.meta.keepAlive
      }
    },
    methods: {
      initState(state) {
        this.offStateChange()
        if (this.initGlobalState) {
          this.actions = this.initGlobalState(state)
        }
      },
      setState(state) {
        this.actions && this.actions.setGlobalState(state)
      },
      onStateChange(callback, fireImmediately) {
        this.actions && this.actions.onGlobalStateChange(callback, fireImmediately)
      },
      offStateChange() {
        this.actions && this.actions.offGlobalStateChange()
      }
    },
    created() {
      this.initState(this.state || {})
    },
    beforeDestroy() {
      this.offStateChange()
    }
  }
</script>

