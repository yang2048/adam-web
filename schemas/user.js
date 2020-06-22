module.exports = {
  vuex: false,
  model: [
    {
      path: '/api/user',
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
        created: '@datetime'
      }
    },
    {
      path: '/api/user/login',
      name: 'login',
      methods: false,
      options: {
        method: 'post'
      },
      template: 'login'
    },
    {
      path: '/api/user/logout',
      name: 'logout',
      methods: false,
      options: {
        method: 'post'
      },
      template: 'logout'
    }
  ]
}
