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
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'StatisticCountdown',
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
          }
        },
        name: 'decimalSeparator',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': 'format'
          }
        },
        name: 'format',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
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
              'FunctionSetter',
              {
                componentName: 'RadioGroupSetter',
                condition: () => false,
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
            'en-US': 'groupSeparator',
            'zh-CN': 'groupSeparator'
          }
        },
        name: 'groupSeparator',
        setter: 'StringSetter'
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
            'en-US': 'onMouseEnter',
            'zh-CN': 'onMouseEnter'
          }
        },
        name: 'onMouseEnter',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseLeave',
            'zh-CN': 'onMouseLeave'
          }
        },
        name: 'onMouseLeave',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': 'precision'
          }
        },
        name: 'precision',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': 'prefix'
          }
        },
        name: 'prefix',
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
            'en-US': 'suffix',
            'zh-CN': 'suffix'
          }
        },
        name: 'suffix',
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
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
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
            'en-US': 'valueRender',
            'zh-CN': 'valueRender'
          }
        },
        name: 'valueRender',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valueStyle',
            'zh-CN': 'valueStyle'
          }
        },
        name: 'valueStyle',
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
