const apiHost = process.env.API_HOST || 'localhost';

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'src/assets',
  baseUrl: process.env.NODE_ENV === 'production' ? '.' : '/',
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 20480,
      }));
  },
  devServer: {
    proxy: {
      '/api': {
        target: `http://${apiHost}:3000`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
};
