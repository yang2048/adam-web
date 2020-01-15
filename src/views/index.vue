<template>
  <div class="wrapper">
    <div ref="container" class="bg">
    </div>
    <my-drag class="dialog" src="/shop/">

    </my-drag>

    <my-dialog src="http://localhost:8001/shop/" width="500px" height="400px"></my-dialog>

  </div>
</template>

<script>
  // import html2canvas from 'html2canvas'
  // import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  // import {debounce} from '$ui/utils/util'
  import {provider} from '$ui/utils/bridge'

  export default {
    data() {
      return {
        mask: null,
        left: 110,
        top: 110
      }
    },
    computed: {
      maskStyle() {
        return {
          // backgroundImage: this.mask ? `url(${this.mask})` : '',
          // backgroundPosition: `${-this.left}px ${-this.top}px`
        }
      }
    },
    methods: {
      // handleDrag(e) {
      //   const {x, y} = e
      //   this.left = x + 10;
      //   this.top = y + 10;
      // },
      // draw() {
      //   const rect = this.$refs.container.getBoundingClientRect()
      //   html2canvas(this.$refs.container, {
      //     width: rect.width,
      //     height: rect.height
      //   }).then(canvas => {
      //     this.mask = canvas.toDataURL()
      //   })
      // }
    },
    mounted() {
      // this.proxyDraw = debounce(this.draw, 500)
      // this.draw()
      // addResizeListener(this.$refs.container, this.proxyDraw)
      this.messager = provider({
        name: 'MyService',
        origin: 'http://localhost:8000/assets/bridge/index.html',
        handler: function (data, callback) {
          const response = '响应内容'
          console.log('provider 收到')
          callback(response)
        }
      })
    },
    beforeDestroy() {
      // removeResizeListener(this.$refs.container, this.proxyDraw)
      this.messager && this.messager.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .bg {
    background: url('../assets/bg.png');
    background-size: cover;
    height: 100%;
    width: 100%;
  }

  .dialog {
    width: 500px;
    height: 400px;
    position: absolute;
    top: 100px;
    left: 100px;
    border: 10px solid rgba(0, 0, 0, 0.6)
  }

  .mask {
    height: 100%;
    width: 100%;
    filter: blur(10px);
  }
</style>
