<template>
  <div class="app-master">
    <my-spin :loading="loading" fit>
      <div class="app-container" v-html="content"></div>
    </my-spin>
  </div>
</template>

<script>
  export default {
    props: {
      loading: Boolean,
      content: String
    }
  }
</script>

