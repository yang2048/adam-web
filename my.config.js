module.exports = {
  devServerPort: 8000,
  previewServerPort: 9001,
  serverPort: 7001,
  publicPath: '/',
  mock: true,
  microApp: true,
  devServerProxy: {
    '/api': {
        target: 'http://10.10.51.18:4523/mock/382178',
        ws: true,
        secure: false,
        pathRewrite: {'^/api/': '/'},
        changeOrigin: true
    }
  }
}
