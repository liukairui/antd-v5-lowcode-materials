import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

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
            itemSetter: 'SlotSetter'
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
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
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
            'en-US': 'cover',
            'zh-CN': 'cover'
          }
        },
        name: 'cover',
        setter: 'SlotSetter'
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
        setter: 'SlotSetter'
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
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                props: {}
              }
            }
          }
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
        setter: 'SlotSetter'
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
                          'en-US': 'tab',
                          'zh-CN': 'tab'
                        }
                      },
                      name: 'tab',
                      setter: 'SlotSetter'
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
                      setter: 'SlotSetter'
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
        setter: {
          componentName: 'ObjectSetter',
          condition: () => false,
          props: {
            config: {
              items: [
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
                    props: {
                      dataSource: [
                        {
                          label: 'line',
                          value: 'line'
                        },
                        {
                          label: 'card',
                          value: 'card'
                        },
                        {
                          label: 'editable-card',
                          value: 'editable-card'
                        }
                      ],
                      options: [
                        {
                          label: 'line',
                          value: 'line'
                        },
                        {
                          label: 'card',
                          value: 'card'
                        },
                        {
                          label: 'editable-card',
                          value: 'editable-card'
                        }
                      ]
                    }
                  }
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
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'hideAdd',
                      'zh-CN': 'hideAdd'
                    }
                  },
                  name: 'hideAdd',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'centered',
                      'zh-CN': 'centered'
                    }
                  },
                  name: 'centered',
                  setter: 'BoolSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'addIcon',
                      'zh-CN': 'addIcon'
                    }
                  },
                  name: 'addIcon',
                  setter: 'SlotSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onEdit',
                      'zh-CN': 'onEdit'
                    }
                  },
                  name: 'onEdit',
                  setter: 'FunctionSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'children',
                      'zh-CN': 'children'
                    }
                  },
                  name: 'children',
                  setter: 'SlotSetter'
                }
              ]
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
        setter: 'SlotSetter'
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
