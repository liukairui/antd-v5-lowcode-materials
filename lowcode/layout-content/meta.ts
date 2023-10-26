import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutContentMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutContent',
  title: '布局-内容',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutContent',
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
    title: '内容布局',
    screenshot: '',
    schema: {
      componentName: 'LayoutContent',
      props: {}
    }
  }
];

export default {
  ...LayoutContentMeta,
  snippets
};
