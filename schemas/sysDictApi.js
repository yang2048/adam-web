module.exports = {
  name: '系统字典API',   
  vuex: false,
  model: [
    {
      title: '系统字典信息', 
      path: '/api/sysDict',
      name: 'sysDictApi',
      transform: 'convertTable'
    }
  ]
};
