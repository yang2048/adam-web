/**
 * 以函数的方式自定义模拟数据模板
 *
 * @module mock/templates
 *
 * @example 模板定义方法
 *
 * export function templateFuncName(Mock, url, query, options) {
 *    return {code:0, data:[], msg: ''}
 * }
 *
 */


export function login(Mock, url, query, options) {
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

export function logout(Mock, url, query, options) {
  return {
    code: 0,
    data: true
  }
}

export function getColumns(Mock, url, query, options) {
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
