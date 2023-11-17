import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import TabsMeta from '../tabs/meta';

const CardMeta: IPublicTypeComponentMetadata = {
  componentName: 'Card',
  title: '卡片',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Card',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'actions',
            'zh-CN': 'actions'
          }
        },
        name: 'actions',
        setter: {
          componentName: 'ArraySetter',
          condition: () => false,
          props: {
            itemsetter: {
              componentName: 'MixedSetter',
              props: {
                setters: ['StringSetter', 'SlotSetter']
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeTabKey',
            'zh-CN': 'activeTabKey'
          }
        },
        name: 'activeTabKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bodyStyle',
            'zh-CN': 'bodyStyle'
          }
        },
        name: 'bodyStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
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
            'en-US': 'cover',
            'zh-CN': 'cover'
          }
        },
        name: 'cover',
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
            'en-US': 'defaultActiveTabKey',
            'zh-CN': 'defaultActiveTabKey'
          }
        },
        name: 'defaultActiveTabKey',
        setter: 'StringSetter'
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
            'en-US': 'headStyle',
            'zh-CN': 'headStyle'
          }
        },
        name: 'headStyle',
        setter: 'StyleSetter',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hoverable',
            'zh-CN': 'hoverable'
          }
        },
        name: 'hoverable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTabChange',
            'zh-CN': 'onTabChange'
          }
        },
        name: 'onTabChange',
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
                label: 'default',
                value: 'default'
              },
              {
                label: 'small',
                value: 'small'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
              {
                label: 'small',
                value: 'small'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabBarExtraContent',
            'zh-CN': 'tabBarExtraContent'
          }
        },
        name: 'tabBarExtraContent',
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
            'en-US': 'tabList',
            'zh-CN': 'tabList'
          }
        },
        name: 'tabList',
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
                          'en-US': 'closeIcon',
                          'zh-CN': 'closeIcon'
                        }
                      },
                      name: 'closeIcon',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['BoolSetter', 'SlotSetter']
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'destroyInactiveTabPane',
                          'zh-CN': 'destroyInactiveTabPane'
                        }
                      },
                      name: 'destroyInactiveTabPane',
                      setter: 'BoolSetter'
                    },
                    {
                      title: {
                        label: {
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
                          'en-US': 'forceRender',
                          'zh-CN': 'forceRender'
                        }
                      },
                      name: 'forceRender',
                      setter: 'BoolSetter'
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
            'en-US': 'tabProps',
            'zh-CN': 'tabProps'
          }
        },
        name: 'tabProps',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: TabsMeta.configure!['props']
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
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
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'inner',
                value: 'inner'
              }
            ],
            options: [
              {
                label: 'inner',
                value: 'inner'
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
    title: '卡片',
    screenshot: '',
    schema: {
      componentName: 'Card',
      props: {}
    }
  }
];

export default {
  ...CardMeta,
  snippets
};
