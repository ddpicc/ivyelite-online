module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },

    proxy: {
      '/roomkit': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'https://roomkit-api.zego.im/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/roomkit': ''
        }
      },
      '/eduCloud': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'https://roomkit-edu-api.zego.im/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/eduCloud': ''
        }
      }, 
    }
  },
  lintOnSave: false,
    
}
