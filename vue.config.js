// module.exports = {
//   devServer: {
//     host: 'localhost', // target host
//     port: 8080,
//     // proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
//     proxy: {
//       '/api': {
//         target: 'http://toutiao.itheima.net', // 代理地址，这里设置的地址会代替axios中设置的baseURL
//         changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
//         // ws: true, // proxy websockets
//         // pathRewrite方法重写url
//         pathRewrite: {
//           '^/api': '/'
//           // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
//           // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
//         }
//       }
//     }
//   }
// }
