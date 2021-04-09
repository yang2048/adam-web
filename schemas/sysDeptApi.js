module.exports = {
  name: '系统部门API',   
  vuex: false,
  model: [
    {
      title: '系统机构信息', 
      path: '/api/sysDept',
      name: 'sysDeptApi',
      transform: 'convertTable'
    }
  ]
};
