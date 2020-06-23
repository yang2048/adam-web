export function mockForExampleLogin(Mock, url, query, options) {
  const {account, password} = query
  const users = ['admin', 'user', 'guest']
  const psw = '123456'
  const isValid = users.includes(account) && password === psw
  return {
    code: isValid ? 0 : -1,
    data: isValid
      ? Mock.mock({
        id: '@guid',
        name: account.toUpperCase(),
        token: '@guid',
        roles: [account]
      })
      : null,
    msg: isValid
      ? ''
      : '账号或密码不正确'
  }
}

export function mockForExampleLogout(Mock, url, query, options) {
  return {
    code: 0,
    data: true
  }
}

export function mockForExampleGetColumns(Mock, url, query, options) {
  const columns = [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '身份证',
      prop: 'id'
    },
    {
      label: '性别',
      prop: 'sex'
    },
    {
      label: '出生日期',
      prop: 'date'
    },
    {
      label: '地区',
      prop: 'county'
    },
    {
      label: '介绍',
      prop: 'info'
    },
    {
      label: '创建时间',
      prop: 'created'
    }
  ]
  return {
    code: 0,
    data: columns
  }
}

export function mockForExampleGetMenus(Mock, url, query, options) {
  const menus = [
    {
      icon: 'el-icon-s-home',
      text: '工作台',
      index: '/'
    },
    {
      icon: 'el-icon-edit-outline',
      text: '表单页面',
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
      text: '列表页面',
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
          index: '/list/tree'
        }
      ]
    },
    {
      icon: 'el-icon-s-marketing',
      text: '主题样式测试',
      index: '/theme'
    }
  ]
  return {
    code: 0,
    data: menus
  }
}
