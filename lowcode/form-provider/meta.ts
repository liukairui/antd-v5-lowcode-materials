import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormProviderMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormProvider',
  title: '表单配置器',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormProvider',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFormChange',
            'zh-CN': 'onFormChange'
          }
        },
        name: 'onFormChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFormFinish',
            'zh-CN': 'onFormFinish'
          }
        },
        name: 'onFormFinish',
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
    title: '表单配置器',
    screenshot: '',
    schema: {
      componentName: 'FormProvider',
      props: {}
    }
  }
];

export default {
  ...FormProviderMeta,
  snippets
};
