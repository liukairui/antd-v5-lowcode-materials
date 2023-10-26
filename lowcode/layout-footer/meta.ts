import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutFooterMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutFooter',
  title: '布局-底部',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutFooter',
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
            'en-US': 'hasSider',
            'zh-CN': 'hasSider'
          },
          tip: {
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'suffixCls',
            'zh-CN': 'suffixCls'
          },
          tip: {
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
    title: '底部布局',
    screenshot: '',
    schema: {
      componentName: 'LayoutFooter',
      props: {}
    }
  }
];

export default {
  ...LayoutFooterMeta,
  snippets
};
