import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CardGridMeta: IPublicTypeComponentMetadata = {
  componentName: 'CardGrid',
  title: '栅格卡片',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'CardGrid',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hoverable',
            'zh-CN': 'hoverable'
          }
        },
        name: 'hoverable',
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
    title: '栅格卡片',
    screenshot: '',
    schema: {
      componentName: 'CardGrid',
      props: {}
    }
  }
];

export default {
  ...CardGridMeta,
  snippets
};
