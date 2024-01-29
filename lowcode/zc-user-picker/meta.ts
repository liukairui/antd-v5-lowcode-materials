import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { fieldPropsMeta } from '../../src/components/zero-code/utils';

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
      ...fieldPropsMeta,
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'multiple',
            'zh-CN': '多选'
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
            'zh-CN': '数据源 / 数据源接口'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource'
          }
        },
        name: 'dataSource',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valueFieldName',
            'zh-CN': '取值字段'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valueFieldName',
            'zh-CN': 'valueFieldName'
          }
        },
        name: 'valueFieldName',
        setter: 'StringSetter'
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
        label: '用户',
        name: 'user_picker',
        required: true,
        disabled: false,
        multiple: true,
        dataSource: '/uc/uc.companyTree.get.do'
      }
    }
  }
];

export default {
  ...ZcUserPickerMeta,
  snippets
};
