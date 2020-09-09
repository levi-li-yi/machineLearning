module.exports = {
  devServer: {
    proxy: {
      '/ml': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        rewritePath: {
          '^/ml': '/'
        }
      }
    }
  }
};