import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutSiderMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutSider',
  title: '布局-侧边',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutSider',
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
            'en-US': 'breakpoint',
            'zh-CN': 'breakpoint'
          },
          tip: {
            type: 'i18n',
            'en-US': 'breakpoint',
            'zh-CN': 'breakpoint'
          }
        },
        name: 'breakpoint',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'xs',
                value: 'xs'
              },
              {
                label: 'sm',
                value: 'sm'
              },
              {
                label: 'md',
                value: 'md'
              },
              {
                label: 'lg',
                value: 'lg'
              },
              {
                label: 'xl',
                value: 'xl'
              },
              {
                label: 'xxl',
                value: 'xxl'
              }
            ],
            options: [
              {
                label: 'xs',
                value: 'xs'
              },
              {
                label: 'sm',
                value: 'sm'
              },
              {
                label: 'md',
                value: 'md'
              },
              {
                label: 'lg',
                value: 'lg'
              },
              {
                label: 'xl',
                value: 'xl'
              },
              {
                label: 'xxl',
                value: 'xxl'
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
            'en-US': 'collapsed',
            'zh-CN': 'collapsed'
          },
          tip: {
            type: 'i18n',
            'en-US': 'collapsed',
            'zh-CN': 'collapsed'
          }
        },
        name: 'collapsed',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsedWidth',
            'zh-CN': 'collapsedWidth'
          },
          tip: {
            type: 'i18n',
            'en-US': 'collapsedWidth',
            'zh-CN': 'collapsedWidth'
          }
        },
        name: 'collapsedWidth',
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
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsible',
            'zh-CN': 'collapsible'
          },
          tip: {
            type: 'i18n',
            'en-US': 'collapsible',
            'zh-CN': 'collapsible'
          }
        },
        name: 'collapsible',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultCollapsed',
            'zh-CN': 'defaultCollapsed'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultCollapsed',
            'zh-CN': 'defaultCollapsed'
          }
        },
        name: 'defaultCollapsed',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBreakpoint',
            'zh-CN': 'onBreakpoint'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBreakpoint',
            'zh-CN': 'onBreakpoint'
          }
        },
        name: 'onBreakpoint',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCollapse',
            'zh-CN': 'onCollapse'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCollapse',
            'zh-CN': 'onCollapse'
          }
        },
        name: 'onCollapse',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'reverseArrow',
            'zh-CN': 'reverseArrow'
          },
          tip: {
            type: 'i18n',
            'en-US': 'reverseArrow',
            'zh-CN': 'reverseArrow'
          }
        },
        name: 'reverseArrow',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'theme',
            'zh-CN': 'theme'
          },
          tip: {
            type: 'i18n',
            'en-US': 'theme',
            'zh-CN': 'theme'
          }
        },
        name: 'theme',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'light',
                value: 'light'
              },
              {
                label: 'dark',
                value: 'dark'
              }
            ],
            options: [
              {
                label: 'light',
                value: 'light'
              },
              {
                label: 'dark',
                value: 'dark'
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
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          },
          tip: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
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
            'en-US': 'width',
            'zh-CN': 'width'
          },
          tip: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width'
          }
        },
        name: 'width',
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
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zeroWidthTriggerStyle',
            'zh-CN': 'zeroWidthTriggerStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'zeroWidthTriggerStyle',
            'zh-CN': 'zeroWidthTriggerStyle'
          }
        },
        name: 'zeroWidthTriggerStyle',
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
    title: '侧边布局',
    screenshot: '',
    schema: {
      componentName: 'LayoutSider',
      props: {}
    }
  }
];

export default {
  ...LayoutSiderMeta,
  snippets
};
