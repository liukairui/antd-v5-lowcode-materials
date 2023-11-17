import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutSiderMeta: IPublicTypeComponentMetadata = {
  componentName: 'LayoutSider',
  title: '侧边布局',
  group: '原子组件',
  category: '布局 Layout',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'LayoutSider',
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
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsed',
            'zh-CN': 'collapsed'
          }
        },
        name: 'collapsed',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsedWidth',
            'zh-CN': 'collapsedWidth'
          }
        },
        name: 'collapsedWidth',
        setter: 'NumberSetter'
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
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultCollapsed',
            'zh-CN': 'defaultCollapsed'
          }
        },
        name: 'defaultCollapsed',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBreakpoint',
            'zh-CN': 'onBreakpoint'
          }
        },
        name: 'onBreakpoint',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCollapse',
            'zh-CN': 'onCollapse'
          }
        },
        name: 'onCollapse',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'reverseArrow',
            'zh-CN': 'reverseArrow'
          }
        },
        name: 'reverseArrow',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'theme',
            'zh-CN': 'theme'
          }
        },
        name: 'theme',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
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
            'en-US': 'width',
            'zh-CN': 'width'
          }
        },
        name: 'width',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zeroWidthTriggerStyle',
            'zh-CN': 'zeroWidthTriggerStyle'
          }
        },
        name: 'zeroWidthTriggerStyle',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: 'StyleSetter',
        display: 'block'
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
