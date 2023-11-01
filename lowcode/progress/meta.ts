import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProgressMeta: IPublicTypeComponentMetadata = {
  componentName: 'Progress',
  title: '进度条',
  group: '原子组件',
  category: '反馈 Feedback',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Progress',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': 'format'
          }
        },
        name: 'format',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gapDegree',
            'zh-CN': 'gapDegree'
          }
        },
        name: 'gapDegree',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gapPosition',
            'zh-CN': 'gapPosition'
          }
        },
        name: 'gapPosition',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'left',
                value: 'left'
              },
              {
                label: 'right',
                value: 'right'
              },
              {
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
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
              },
              {
                label: 'top',
                value: 'top'
              },
              {
                label: 'bottom',
                value: 'bottom'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': 'percent'
          }
        },
        name: 'percent',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showInfo',
            'zh-CN': 'showInfo'
          }
        },
        name: 'showInfo',
        setter: 'BoolSetter'
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'MixedSetter',
                props: {}
              },
              {
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          }
        },
        name: 'status',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'active',
                value: 'active'
              },
              {
                label: 'exception',
                value: 'exception'
              }
            ],
            options: [
              {
                label: 'success',
                value: 'success'
              },
              {
                label: 'normal',
                value: 'normal'
              },
              {
                label: 'active',
                value: 'active'
              },
              {
                label: 'exception',
                value: 'exception'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'steps',
            'zh-CN': 'steps'
          }
        },
        name: 'steps',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strokeColor',
            'zh-CN': 'strokeColor'
          }
        },
        name: 'strokeColor',
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
              },
              {
                componentName: 'ObjectSetter',
                condition: () => false,
                props: {
                  config: {
                    extraSetter: 'StringSetter'
                  }
                }
              },
              {
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
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strokeLinecap',
            'zh-CN': 'strokeLinecap'
          }
        },
        name: 'strokeLinecap',
        setter: {
          componentName: 'RadioGroupSetter',
          condition: () => false,
          props: {
            dataSource: [
              {
                label: 'round',
                value: 'round'
              },
              {
                label: 'square',
                value: 'square'
              },
              {
                label: 'butt',
                value: 'butt'
              }
            ],
            options: [
              {
                label: 'round',
                value: 'round'
              },
              {
                label: 'square',
                value: 'square'
              },
              {
                label: 'butt',
                value: 'butt'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strokeWidth',
            'zh-CN': 'strokeWidth'
          }
        },
        name: 'strokeWidth',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'success',
            'zh-CN': 'success'
          }
        },
        name: 'success',
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
                      'en-US': 'percent',
                      'zh-CN': 'percent'
                    }
                  },
                  name: 'percent',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'progress',
                      'zh-CN': 'progress'
                    }
                  },
                  name: 'progress',
                  setter: 'NumberSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'strokeColor',
                      'zh-CN': 'strokeColor'
                    }
                  },
                  name: 'strokeColor',
                  setter: 'StringSetter'
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
            'en-US': 'trailColor',
            'zh-CN': 'trailColor'
          }
        },
        name: 'trailColor',
        setter: 'StringSetter'
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
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'line',
                value: 'line'
              },
              {
                label: 'dashboard',
                value: 'dashboard'
              }
            ],
            options: [
              {
                label: 'circle',
                value: 'circle'
              },
              {
                label: 'line',
                value: 'line'
              },
              {
                label: 'dashboard',
                value: 'dashboard'
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
    title: '进度条',
    screenshot: '',
    schema: {
      componentName: 'Progress',
      props: {}
    }
  }
];

export default {
  ...ProgressMeta,
  snippets
};
