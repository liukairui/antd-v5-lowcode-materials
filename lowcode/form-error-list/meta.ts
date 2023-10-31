import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormErrorListMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormErrorList',
  title: '表单错误列表',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormErrorList',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'errors',
            'zh-CN': 'errors'
          }
        },
        name: 'errors'
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
    title: '表单错误列表',
    screenshot: '',
    schema: {
      componentName: 'FormErrorList',
      props: {}
    }
  }
];

export default {
  ...FormErrorListMeta,
  snippets
};
