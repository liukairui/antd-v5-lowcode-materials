import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CollapseMeta: IPublicTypeComponentMetadata = {
  componentName: 'Collapse',
  title: '折叠面板',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Collapse',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'accordion',
            'zh-CN': 'accordion'
          }
        },
        name: 'accordion',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': 'activeKey'
          }
        },
        name: 'activeKey',
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
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          }
        },
        name: 'bordered',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsible',
            'zh-CN': 'collapsible'
          }
        },
        name: 'collapsible',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'disabled',
                value: 'disabled'
              },
              {
                label: 'icon',
                value: 'icon'
              },
              {
                label: 'header',
                value: 'header'
              }
            ],
            options: [
              {
                label: 'disabled',
                value: 'disabled'
              },
              {
                label: 'icon',
                value: 'icon'
              },
              {
                label: 'header',
                value: 'header'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': 'defaultActiveKey'
          }
        },
        name: 'defaultActiveKey',
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
            'en-US': 'destroyInactivePanel',
            'zh-CN': 'destroyInactivePanel'
          }
        },
        name: 'destroyInactivePanel',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandIcon',
            'zh-CN': 'expandIcon'
          }
        },
        name: 'expandIcon',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            params: ['panelProps']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandIconPosition',
            'zh-CN': 'expandIconPosition'
          }
        },
        name: 'expandIconPosition',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              }
            ],
            options: [
              {
                label: 'start',
                value: 'start'
              },
              {
                label: 'end',
                value: 'end'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'ghost',
            'zh-CN': 'ghost'
          }
        },
        name: 'ghost',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'items',
            'zh-CN': 'items'
          }
        },
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              condition: () => false,
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'children',
                          'zh-CN': 'children'
                        }
                      },
                      name: 'children',
                      isRequired: true,
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
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
                      isRequired: true,
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
                          'en-US': 'key',
                          'zh-CN': 'key'
                        }
                      },
                      name: 'key',
                      setter: 'StringSetter'
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ],
            options: [
              {
                label: 'small',
                value: 'small'
              },
              {
                label: 'middle',
                value: 'middle'
              },
              {
                label: 'large',
                value: 'large'
              }
            ]
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
    title: '折叠面板',
    screenshot: '',
    schema: {
      componentName: 'Collapse',
      props: {}
    }
  }
];

export default {
  ...CollapseMeta,
  snippets
};
