module.exports = {
  vuex: false,
  model: [
    {
      path: '/api/user',
      columns: {
        id: '@guid',
        name: '@cname',
        'age|10-100': 1,
        date: '@date(yyyy-MM-dd)'
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
