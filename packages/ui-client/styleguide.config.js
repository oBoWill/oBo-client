const path = require ('path');

module.exports = {
  components: 'src/**/components/**/[A-Z]*.jsx',
  showCode: true,
  showUsage: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/(\/[A-Z][a-z0-9_$]*)\.jsx?$/, (_, m) => `/__examples__${m}.example.md`);
  },
  webpackConfig: require('../config/webpack.config.dev'),
  require: [
    path.join(__dirname, './src/index.css'),
  ],
};
