import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { zcFieldProps } from '../zc-field-props';

const ZcUserPickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcUserPicker',
  title: '用户选择器 [零码]',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.11',
    exportName: 'ZcUserPicker',
    main: 'src/index.tsx',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      ...zcFieldProps,
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          },
          tip: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': 'multiple'
          }
        },
        name: 'multiple',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          }
        },
        name: 'dataSource',
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
    title: '用户选择器 [零码]',
    screenshot: '',
    schema: {
      componentName: 'ZcUserPicker',
      props: {
        dataSource: {
          type: 'JSExpression',
          value: "async () => (await this.utils.axios.post('/do/2492.70')).data"
        },
        label: '用户',
        name: 'user'
      }
    }
  }
];

export default {
  ...ZcUserPickerMeta,
  snippets
};
