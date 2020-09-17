<template>
  <my-map height="100%" adapter="TDT" projection="EPSG:3857" :center="center">
    <my-map-marker v-if="markers" :data="markers">
      <template v-slot="{marker}">
        坐标：{{marker.coordinate}} <br>
        数据项个数：{{marker.items.length}} <br>
        集群: {{marker.cluster}} <br>
      </template>
    </my-map-marker>
  </my-map>
</template>
<script>
  import {fromLonLat} from 'ol/proj'

  export default {
    data() {
      return {
        center: fromLonLat([113.261999, 23.130592]),
        markers: null
      }
    },
    methods: {
      createMarkers(count) {
        const markers = []
        const center = [113.261999, 23.130592]
        for (let i = 0; i < count; i++) {
          markers.push({
            coordinate: fromLonLat(center.map(n => n + Math.random() - Math.random()))
          })
        }
        return markers
      }
    },
    created() {
      this.markers = this.createMarkers(100)
    }
  }
</script>
