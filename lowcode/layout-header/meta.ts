import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutHeaderMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutHeader',
  title: 'LayoutHeader',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutHeader',
    main: 'src/index.tsx',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'suffixCls',
            'zh-CN': 'suffixCls'
          }
        },
        name: 'suffixCls',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasSider',
            'zh-CN': 'hasSider'
          }
        },
        name: 'hasSider',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      className: true,
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'LayoutHeader',
    screenshot: '',
    schema: {
      componentName: 'LayoutHeader',
      props: {}
    }
  }
];

export default {
  ...LayoutHeaderMeta,
  snippets
};
