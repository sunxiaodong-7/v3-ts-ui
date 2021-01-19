module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/styles/mixin/global.scss";`
      }
    }
  }
}