const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    'api',
    createProxyMiddleware({
      target: 'https://8.138.149.26:8080',
      changeOrigin: true
    })
  )
}
