import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TableSummaryRowMeta: IPublicTypeComponentMetadata = {
  componentName: 'TableSummaryRow',
  title: '表格总结行',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.12',
    exportName: 'TableSummaryRow',
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
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
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
    title: '表格总结行',
    screenshot: '',
    schema: {
      componentName: 'TableSummaryRow',
      props: {}
    }
  }
];

export default {
  ...TableSummaryRowMeta,
  snippets
};
