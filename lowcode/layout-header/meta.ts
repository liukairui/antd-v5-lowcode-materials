import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutHeaderMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutHeader',
  title: '顶部布局',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutHeader',
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
          }
        },
        name: 'hasSider',
        setter: 'BoolSetter'
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
    title: '顶部布局',
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
