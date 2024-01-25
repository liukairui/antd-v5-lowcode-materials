const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        builtinAssets: []
      }
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        openUrl: 'https://qiuer.net/qlc/?debug&device=desktop'
      }
    ]
  ]
};
