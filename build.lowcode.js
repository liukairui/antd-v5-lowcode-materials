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
        engineScope: '@alilc'
      }
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        openUrl: 'http://localhost:5556?debug&device=default'
      }
    ]
  ]
};
