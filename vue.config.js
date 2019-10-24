// vue.config.js
// module.exports = {
//   configureWebpack: {
//       resolve: {
//           alias: {
//             'src': '@',
//             'assets': 'src/assets',
//             'components': 'src/components',
//             'views': 'src/views',
//           }
//       }
//   },
// }

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'));
    }
}