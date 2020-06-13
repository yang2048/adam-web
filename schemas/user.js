module.exports = {
  vuex: false,
  model: [{
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname',
      date: '@date(yyyy-MM-dd)'
    }
  }, {
    path: '/data.json',
    methods: false,
    name: 'getData',
    options: {
      method: 'get',
      responseType: 'blob',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  }]
}
