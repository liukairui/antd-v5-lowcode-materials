import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormProviderMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormProvider',
  title: 'FormProvider',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormProvider',
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
            'en-US': 'onFormChange',
            'zh-CN': 'onFormChange'
          }
        },
        name: 'onFormChange',
        setter: {
          componentName: 'FunctionSetter'
        }
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
        setter: {
          componentName: 'FunctionSetter'
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
    title: 'FormProvider',
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
