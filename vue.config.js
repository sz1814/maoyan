module.exports = {
  publicPath: '/my/',

  devServer: {
    proxy: {
      '/maoyan' : {
        target: 'http://m.maoyan.com',
        pathRewrite: {
          '^/maoyan': ''
        }
      }
    }
  }
}