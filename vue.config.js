module.exports = {
  devServer: {
    proxy: {
      '/ml': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        rewritePath: {
          '^/ml': '/'
        }
      },
      '/jupyter': {
        target: 'http://192.168.3.46:31380',
        changeOrigin: true,
        rewritePath: {
          '^/jupyter': '/'
        }
      }
    }
  }
};