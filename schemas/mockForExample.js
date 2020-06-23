module.exports = {
  vuex: false,
  model: [
    {
      path: '/api/mock-for-example',
      columns: {
        id: '@id',
        guid: '@guid',
        sex: '@integer(0,1)',
        name: '@cname',
        'age|10-100': 1,
        date: '@date(yyyy-MM-dd)',
        title: '@cparagraph(1)',
        info: '@cparagraph(3,7)',
        avatar: '@dataImage',
        county: '@county(true)',
        zip: '@zip',
        state: '@integer(0,5)',
        'label|1': ['黄', '毒', '赌', '逃', '前科'],
        created: '@datetime'
      }
    },
    {
      path: '/api/mock-for-example/columns',
      name: 'getColumns',
      methods: false,
      options: {
        method: 'post'
      },
      template: 'mockForExampleGetColumns'
    },
    {
      path: '/api/mock-for-example/login',
      name: 'login',
      methods: false,
      options: {
        method: 'post'
      },
      template: 'mockForExampleLogin'
    },
    {
      path: '/api/mock-for-example/logout',
      name: 'logout',
      methods: false,
      options: {
        method: 'post'
      },
      template: 'mockForExampleLogout'
    }
  ]
}
