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
