// vue.config.js
module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
            'src': '@',
            'assets': 'src/assets',
            'components': 'src/components',
            'views': 'src/views',
          }
      }
  },
}