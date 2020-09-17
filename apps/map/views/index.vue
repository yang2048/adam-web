<template>
  <my-map height="100%" :invert="invert">
    <my-map-layers :layers="layers"
                   :margin="10"
                   placement="center-bottom"></my-map-layers>
    <my-map-scatter v-for="n in 50"
                    :key="n"
                    :coordinate="getCoordinate()"
                    :delay="Math.random() * 5000"></my-map-scatter>
  </my-map>
</template>
<script>
  import Baidu from '$ui/map/sources/preview/Baidu.png'
  import Amap from '$ui/map/sources/preview/Amap.png'
  import OSM from '$ui/map/sources/preview/OSM.png'
  import TDT from '$ui/map/sources/preview/TDT.png'
  import skin from '$ui/utils/skin'

  export default {
    mixins: [skin('suit', true)],
    data() {
      return {
        layers: [
          {
            title: '百度',
            adapter: 'Baidu',
            preview: Baidu
          },
          {
            title: '高德',
            adapter: 'Amap',
            preview: Amap
          },
          {
            title: 'OSM',
            adapter: 'OSM',
            preview: OSM
          },
          {
            title: '天地图',
            adapter: 'TDT',
            preview: TDT
          }
        ]
      }
    },
    computed: {
      invert() {
        return this.skin === 'dark'
      }
    },
    methods: {
      getCoordinate() {
        return [
          113 + Math.random() - Math.random(),
          23 + Math.random() - Math.random()
        ]
      }
    }
  }
</script>

<style lang="scss">
  .my-micro-app__content {
    height: 100%;

    > div {
      height: 100%;
    }
  }
</style>
