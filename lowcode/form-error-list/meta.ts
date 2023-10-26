import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormErrorListMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormErrorList',
  title: '错误列表',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormErrorList',
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
            'en-US': 'errors',
            'zh-CN': 'errors'
          },
          tip: {
            type: 'i18n',
            'en-US': 'errors',
            'zh-CN': 'errors'
          }
        },
        name: 'errors',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'SlotSetter',
              props: {
                mode: 'node'
              },
              initialValue: {
                type: 'JSSlot',
                value: []
              }
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fieldId',
            'zh-CN': 'fieldId'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fieldId',
            'zh-CN': 'fieldId'
          }
        },
        name: 'fieldId',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          },
          tip: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          }
        },
        name: 'help',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'helpStatus',
            'zh-CN': 'helpStatus'
          },
          tip: {
            type: 'i18n',
            'en-US': 'helpStatus',
            'zh-CN': 'helpStatus'
          }
        },
        name: 'helpStatus',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
              }
            ],
            options: [
              {
                label: '',
                value: ''
              },
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'warning',
                value: 'warning'
              },
              {
                label: 'error',
                value: 'error'
              },
              {
                label: 'validating',
                value: 'validating'
              }
            ]
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onVisibleChanged',
            'zh-CN': 'onVisibleChanged'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onVisibleChanged',
            'zh-CN': 'onVisibleChanged'
          }
        },
        name: 'onVisibleChanged',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'warnings',
            'zh-CN': 'warnings'
          },
          tip: {
            type: 'i18n',
            'en-US': 'warnings',
            'zh-CN': 'warnings'
          }
        },
        name: 'warnings',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'SlotSetter',
              props: {
                mode: 'node'
              },
              initialValue: {
                type: 'JSSlot',
                value: []
              }
            }
          },
          initialValue: undefined
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
    title: '错误列表',
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
