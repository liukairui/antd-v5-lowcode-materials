import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TypographyMeta: IPublicTypeComponentMetadata = {
  componentName: 'Typography',
  title: '排版',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Typography',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [],
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
    title: '排版',
    screenshot: '',
    schema: {
      componentName: 'Typography',
      props: {}
    }
  }
];

export default {
  ...TypographyMeta,
  snippets
};
