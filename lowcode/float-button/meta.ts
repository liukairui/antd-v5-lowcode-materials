import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FloatButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'FloatButton',
  title: '悬浮按钮',
  group: '原子组件',
  category: '通用 General',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'FloatButton',
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
            'en-US': 'badge',
            'zh-CN': 'badge'
          },
          tip: {
            type: 'i18n',
            'en-US': 'badge',
            'zh-CN': 'badge'
          }
        },
        name: 'badge',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
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
            'en-US': 'description',
            'zh-CN': 'description'
          },
          tip: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
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
            'en-US': 'href',
            'zh-CN': 'href'
          },
          tip: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': 'href'
          }
        },
        name: 'href',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          },
          tip: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
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
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'shape',
            'zh-CN': 'shape'
          },
          tip: {
            type: 'i18n',
            'en-US': 'shape',
            'zh-CN': 'shape'
          }
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'square',
                value: 'square'
              }
            ],
            options: [
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'square',
                value: 'square'
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
            'en-US': 'target',
            'zh-CN': 'target'
          },
          tip: {
            type: 'i18n',
            'en-US': 'target',
            'zh-CN': 'target'
          }
        },
        name: 'target',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: '_self',
                      value: '_self'
                    },
                    {
                      label: '_blank',
                      value: '_blank'
                    },
                    {
                      label: '_parent',
                      value: '_parent'
                    },
                    {
                      label: '_top',
                      value: '_top'
                    }
                  ],
                  options: [
                    {
                      label: '_self',
                      value: '_self'
                    },
                    {
                      label: '_blank',
                      value: '_blank'
                    },
                    {
                      label: '_parent',
                      value: '_parent'
                    },
                    {
                      label: '_top',
                      value: '_top'
                    }
                  ]
                },
                initialValue: undefined
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tooltip',
            'zh-CN': 'tooltip'
          }
        },
        name: 'tooltip',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      props: {}
                    }
                  }
                },
                initialValue: undefined
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          },
          tip: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'primary',
                value: 'primary'
              }
            ]
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
    title: '悬浮按钮',
    screenshot: '',
    schema: {
      componentName: 'FloatButton',
      props: {}
    }
  }
];

export default {
  ...FloatButtonMeta,
  snippets
};
