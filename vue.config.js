module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'src/assets',
  baseUrl: process.env.NODE_ENV === 'production' ? '.' : '/',
};
