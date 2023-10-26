import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StatisticCountdownMeta: IPublicTypeComponentMetadata = {
  componentName: 'StatisticCountdown',
  title: '倒计时',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'StatisticCountdown',
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
            'en-US': 'decimalSeparator',
            'zh-CN': 'decimalSeparator'
          },
          tip: {
            type: 'i18n',
            'en-US': 'decimalSeparator',
            'zh-CN': 'decimalSeparator'
          }
        },
        name: 'decimalSeparator',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': 'format'
          },
          tip: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': 'format'
          }
        },
        name: 'format',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formatter',
            'zh-CN': 'formatter'
          },
          tip: {
            type: 'i18n',
            'en-US': 'formatter',
            'zh-CN': 'formatter'
          }
        },
        name: 'formatter',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter'
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'false',
                      value: false
                    },
                    {
                      label: 'number',
                      value: 'number'
                    },
                    {
                      label: 'countdown',
                      value: 'countdown'
                    }
                  ],
                  options: [
                    {
                      label: 'false',
                      value: false
                    },
                    {
                      label: 'number',
                      value: 'number'
                    },
                    {
                      label: 'countdown',
                      value: 'countdown'
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
            'en-US': 'groupSeparator',
            'zh-CN': 'groupSeparator'
          },
          tip: {
            type: 'i18n',
            'en-US': 'groupSeparator',
            'zh-CN': 'groupSeparator'
          }
        },
        name: 'groupSeparator',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          }
        },
        name: 'onMouseEnter',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          }
        },
        name: 'onMouseLeave',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': 'precision'
          },
          tip: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': 'precision'
          }
        },
        name: 'precision',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          },
          tip: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          }
        },
        name: 'prefix',
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
            'en-US': 'suffix',
            'zh-CN': 'suffix'
          },
          tip: {
            type: 'i18n',
            'en-US': 'suffix',
            'zh-CN': 'suffix'
          }
        },
        name: 'suffix',
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
            'en-US': 'title',
            'zh-CN': 'title'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
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
            'en-US': 'value',
            'zh-CN': 'value'
          },
          tip: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
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
            'en-US': 'valueRender',
            'zh-CN': 'valueRender'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valueRender',
            'zh-CN': 'valueRender'
          }
        },
        name: 'valueRender',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valueStyle',
            'zh-CN': 'valueStyle'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valueStyle',
            'zh-CN': 'valueStyle'
          }
        },
        name: 'valueStyle',
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
      style: true,
      events: [
        {
          name: 'onFinish'
        }
      ]
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '倒计时',
    screenshot: '',
    schema: {
      componentName: 'StatisticCountdown',
      props: {}
    }
  }
];

export default {
  ...StatisticCountdownMeta,
  snippets
};
