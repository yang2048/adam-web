<template>
  <Diagram height="100%"
           :nodes="nodes"
           :links="links"
           :dark="dark"
           :options="init"
           :on-model-change="handleModelChange">
    <Toolbar></Toolbar>
    <StatusBar></StatusBar>
    <Palette :nodes="palettes" :options="init"></Palette>
    <Overview></Overview>
    <Sidebar :collapsed.sync="collapsed"></Sidebar>
  </Diagram>
</template>
<script>
  import {Diagram, Palette, Overview, StatusBar, Sidebar, Toolbar, templateMap, circle, link, theme} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'
  import skin from '$ui/utils/skin'

  export default {
    mixins: [skin('suit', true)],
    components: {
      Diagram,
      Toolbar,
      StatusBar,
      Palette,
      Overview,
      Sidebar
    },
    data() {
      const {nodes, links} = mockGraph(100, 100, 3, 10)
      return {
        collapsed: true,
        nodes: nodes,
        links: links,
        palettes: [
          {text: 'default'},
          {category: 'color1', text: 'color1'},
          {category: 'color2', text: 'color2'},
          {category: 'color3', text: 'color3'},
          {category: 'color4', text: 'color4'},
          {category: 'color5', text: 'color5'},
          {category: 'color6', text: 'color6'}
        ]
      }
    },
    computed: {
      dark() {
        return this.skin === 'dark'
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true})
        return diagram
      },
      createNodeMap() {
        const colors = [null, 'color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(n => {
          map[n || ''] = circle({
            shape: {
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer',
              $bindings: ['fill']
            },
            label: {
              stroke: '#fff',
              $bindings: ['text']
            }
          }, theme[n])
        })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
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
