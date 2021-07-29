module.exports = {

  //本地测试

  //   devServer: {
  //     host: '192.168.1.103',  //手机上测试
  //     port: 8080,           //端口号
  // },

  //本地部署上线
  //基本路径
  publicPath: './',
  outputDir: 'dist',
  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: 'static',
  //以多页模式构建应用程序。
  pages: undefined,
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  parallel: require('os').cpus().length > 1,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    // publicPath: '../',
    // 设置代理
    proxy: {
      "/api": {
        target:
          "http://172.22.223.188/",// 跨域访问，你的ip地址
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理
        secure: false, // 将安全设置为false,才能访问https开头的
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
