// 静态配置对象
const staticConfig = window.__config__ || {}

// 请求地址前缀
export const API_HOST = staticConfig['API_HOST'] || 'http://127.0.0.1:8080'
