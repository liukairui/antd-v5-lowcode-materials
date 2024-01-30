import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ZcFormMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcForm',
  title: '表单 [零码]',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.11',
    exportName: 'ZcForm',
    main: 'src/index.tsx',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: 'that',
        name: 'that',
        condition: () => false,
        setter: {
          componentName: 'VariableSetter',
          initialValue: {
            type: 'JSExpression',
            value: 'this'
          }
        }
      },
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
            'en-US': 'layout',
            'zh-CN': '布局'
          },
          tip: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ],
            options: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'instanceStateKey',
            'zh-CN': '表单实例 state 字段名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'instanceStateKey',
            'zh-CN': 'instanceStateKey | 例：设为 form，则可通过 this.state.form 获取到表单实例'
          }
        },
        name: 'instanceStateKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valuesStateKey',
            'zh-CN': '表单值 state 字段名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valuesStateKey',
            'zh-CN':
              'valuesStateKey | 例：设为 formValues，则可通过 this.state.formValues 获取到表单值'
          }
        },
        name: 'valuesStateKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': '初始值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': 'initialValues'
          }
        },
        name: 'initialValues',
        setter: 'JsonSetter'
      }
    ],
    supports: {
      style: true,
      className: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '表单 [零码]',
    screenshot: '',
    schema: {
      componentName: 'ZcForm',
      props: {
        disabled: false,
        layout: 'vertical',
        instanceStateKey: 'form',
        valuesStateKey: 'formValues'
      },
      children: []
    }
  }
];

export default {
  ...ZcFormMeta,
  snippets
};
