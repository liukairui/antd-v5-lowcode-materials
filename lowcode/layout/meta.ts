import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutMeta: IPublicTypeComponentMetadata = {
  componentName: 'Layout',
  title: 'Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Layout',
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
    title: 'Layout',
    screenshot: '',
    schema: {
      componentName: 'Layout',
      props: {}
    }
  }
];

export default {
  ...LayoutMeta,
  snippets
};
