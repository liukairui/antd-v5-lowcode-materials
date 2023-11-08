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
        builtinAssets: [
          {
            packages: [
              {
                package: 'dayjs',
                version: '2.24.0',
                urls: ['https://cdn.net.gtjaqh.com/qlc/deps/dayjs.min.js'],
                library: 'dayjs'
              }
            ],
            components: []
          }
        ]
      }
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        openUrl: 'http://localhost:5556?debug&device=desktop'
      }
    ]
  ]
};
