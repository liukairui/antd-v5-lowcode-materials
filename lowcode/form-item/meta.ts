import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import GridColMeta from '../grid-col/meta';
import TooltipMeta from '../tooltip/meta';

const FormItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormItem',
  title: '表单项',
  group: '原子组件',
  category: '数据录入 Data Entry',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FormItem',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'colon',
            'zh-CN': 'colon'
          }
        },
        name: 'colon',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dependencies',
            'zh-CN': 'dependencies'
          }
        },
        name: 'dependencies',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: 'StringSetter'
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueFromEvent',
            'zh-CN': 'getValueFromEvent'
          }
        },
        name: 'getValueFromEvent',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueProps',
            'zh-CN': 'getValueProps'
          }
        },
        name: 'getValueProps',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': 'hasFeedback'
          }
        },
        name: 'hasFeedback',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'icons',
                            'zh-CN': 'icons'
                          }
                        },
                        name: 'icons',
                        setter: 'FunctionSetter'
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          }
        },
        name: 'help',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hidden',
            'zh-CN': 'hidden'
          }
        },
        name: 'hidden',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'htmlFor',
            'zh-CN': 'htmlFor'
          }
        },
        name: 'htmlFor',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialValue',
            'zh-CN': 'initialValue'
          }
        },
        name: 'initialValue',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': 'label'
          }
        },
        name: 'label',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'labelAlign',
            'zh-CN': 'labelAlign'
          }
        },
        name: 'labelAlign',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              }
            ],
            options: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'labelCol',
            'zh-CN': 'labelCol'
          }
        },
        name: 'labelCol',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: GridColMeta.configure!['props']
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'messageVariables',
            'zh-CN': 'messageVariables'
          }
        },
        name: 'messageVariables'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'normalize',
            'zh-CN': 'normalize'
          }
        },
        name: 'normalize',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'noStyle',
            'zh-CN': 'noStyle'
          }
        },
        name: 'noStyle',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          }
        },
        name: 'preserve',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required'
          }
        },
        name: 'required',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rules',
            'zh-CN': 'rules'
          }
        },
        description: '@todo 待完善 Rule[]',
        name: 'rules'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'shouldUpdate',
            'zh-CN': 'shouldUpdate'
          }
        },
        name: 'shouldUpdate',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          }
        },
        name: 'tooltip',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'SlotSetter',
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'icon',
                            'zh-CN': 'icon'
                          }
                        },
                        name: 'icon',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: ['StringSetter', 'SlotSetter']
                          }
                        }
                      },
                      ...TooltipMeta.configure!['props']
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateDebounce',
            'zh-CN': 'validateDebounce'
          }
        },
        name: 'validateDebounce',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateFirst',
            'zh-CN': 'validateFirst'
          }
        },
        name: 'validateFirst',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
                props: {
                  dataSource: [
                    {
                      label: 'parallel',
                      value: 'parallel'
                    }
                  ],
                  options: [
                    {
                      label: 'parallel',
                      value: 'parallel'
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateStatus',
            'zh-CN': 'validateStatus'
          }
        },
        name: 'validateStatus',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          }
        },
        name: 'validateTrigger',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                condition: () => false,
                props: {
                  itemSetter: 'StringSetter'
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapperCol',
            'zh-CN': 'wrapperCol'
          }
        },
        name: 'wrapperCol',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: GridColMeta.configure!['props']
            }
          }
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
    title: '表单项',
    screenshot: '',
    schema: {
      componentName: 'FormItem',
      props: {}
    }
  }
];

export default {
  ...FormItemMeta,
  snippets
};
