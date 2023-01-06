// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, './', dir)
// }

// module.exports = {
//     // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
//   publicPath: './',  
//   // 输出文件目录
//   outputDir: 'dist',  
//   // eslint-loader 是否在保存的时候检查
//   lintOnSave: true,  
//   // 是否使用包含运行时编译器的 Vue 构建版本
//   runtimeCompiler: false,  
//   // 生产环境是否生成 sourceMap 文件
//   productionSourceMap: false,  
//   // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
//   integrity: false,  
//   // webpack相关配置
//   chainWebpack: config => {
//     // svg rule loader
//     const svgRule = config.module.rule('svg') // 找到svg-loader
//     svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
//     svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
//     svgRule // 添加svg新的loader处理
//       .test(/\.svg$/)
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]',
//       })
//     // 修改images loader 添加svg处理
//     const imagesRule = config.module.rule('images')
//     //将 icons 文件夹排除, 不让 url-loader 处理该文件夹
//     imagesRule.exclude.add(resolve('src/assets/icons'))
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
//   }
// }


//vue.config.js
module.exports = {
  devServer: {
      proxy: {
          //配置跨域
          '/api': {
              "target": 'http://localhost:2713/', //这里填写项目真实的后台接口地址
              changOrigin: true, //设置允许跨域
              pathRewrite: { //这个重写不可省略！因为我们真正请求的地址并不含 /api
                  '^/api': ''
                      /* 当我们在浏览器中看到请求的地址为：http://localhost:8080/api/data/getdata 时
                      因为重写了 /api ，所以实际上访问的地址是：http://x.x.x.x:x/data/getdata，
                      */
              }
          }
      }
  },
  pluginOptions: {
      "style-resources-loader": {
          preProcessor: "less",
          patterns: [],
      },
  },
}