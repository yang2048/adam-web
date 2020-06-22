export default [
  {
    icon: 'el-icon-s-home',
    text: '工作台',
    index: '/'
  },
  {
    icon: 'el-icon-edit-outline',
    text: '表单页',
    index: '/form',
    children: [
      {
        icon: 'el-icon-document',
        text: '基础表单',
        index: '/form/basic'
      },
      {
        icon: 'el-icon-document',
        text: '分步表单',
        index: '/form/step'
      },
      {
        icon: 'el-icon-document',
        text: '高级表单',
        index: '/form/advanced'
      }
    ]
  },
  {
    icon: 'el-icon-s-grid',
    text: '列表页',
    index: '/list',
    children: [
      {
        icon: 'el-icon-document',
        text: '标准列表',
        index: '/list/basic'
      },
      {
        icon: 'el-icon-document',
        text: '卡片列表',
        index: '/list/card'
      },
      {
        icon: 'el-icon-document',
        text: '查询列表',
        index: '/list/search'
      },
      {
        icon: 'el-icon-document',
        text: '增删查改',
        index: '/list/crud'
      },
      {
        icon: 'el-icon-document',
        text: '树结构列表',
        index: '/list/crud'
      }
    ]
  },
  {
    icon: 'el-icon-s-marketing',
    text: '主题样式测试',
    index: '/theme'
  }
]
