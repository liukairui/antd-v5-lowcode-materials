import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeMeta: IPublicTypeComponentMetadata = {
  componentName: 'Badge',
  title: '徽标数',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Badge',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'classNames',
            'zh-CN': 'classNames'
          }
        },
        name: 'classNames',
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
                      'en-US': 'root',
                      'zh-CN': 'root'
                    }
                  },
                  name: 'root',
                  setter: 'StringSetter'
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'indicator',
                      'zh-CN': 'indicator'
                    }
                  },
                  name: 'indicator',
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
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
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
              },
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: 'blue',
                      value: 'blue'
                    },
                    {
                      label: 'purple',
                      value: 'purple'
                    },
                    {
                      label: 'cyan',
                      value: 'cyan'
                    },
                    {
                      label: 'green',
                      value: 'green'
                    },
                    {
                      label: 'magenta',
                      value: 'magenta'
                    },
                    {
                      label: 'pink',
                      value: 'pink'
                    },
                    {
                      label: 'red',
                      value: 'red'
                    },
                    {
                      label: 'orange',
                      value: 'orange'
                    },
                    {
                      label: 'yellow',
                      value: 'yellow'
                    },
                    {
                      label: 'volcano',
                      value: 'volcano'
                    },
                    {
                      label: 'geekblue',
                      value: 'geekblue'
                    },
                    {
                      label: 'lime',
                      value: 'lime'
                    },
                    {
                      label: 'gold',
                      value: 'gold'
                    }
                  ],
                  options: [
                    {
                      label: 'blue',
                      value: 'blue'
                    },
                    {
                      label: 'purple',
                      value: 'purple'
                    },
                    {
                      label: 'cyan',
                      value: 'cyan'
                    },
                    {
                      label: 'green',
                      value: 'green'
                    },
                    {
                      label: 'magenta',
                      value: 'magenta'
                    },
                    {
                      label: 'pink',
                      value: 'pink'
                    },
                    {
                      label: 'red',
                      value: 'red'
                    },
                    {
                      label: 'orange',
                      value: 'orange'
                    },
                    {
                      label: 'yellow',
                      value: 'yellow'
                    },
                    {
                      label: 'volcano',
                      value: 'volcano'
                    },
                    {
                      label: 'geekblue',
                      value: 'geekblue'
                    },
                    {
                      label: 'lime',
                      value: 'lime'
                    },
                    {
                      label: 'gold',
                      value: 'gold'
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
            'en-US': 'count',
            'zh-CN': 'count'
          }
        },
        name: 'count',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dot',
            'zh-CN': 'dot'
          }
        },
        name: 'dot',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'offset',
            'zh-CN': 'offset'
          }
        },
        name: 'offset',
        setter: {
          componentName: 'MixedSetter',
          props: {}
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overflowCount',
            'zh-CN': 'overflowCount'
          }
        },
        name: 'overflowCount',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollNumberPrefixCls',
            'zh-CN': 'scrollNumberPrefixCls'
          }
        },
        name: 'scrollNumberPrefixCls',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showZero',
            'zh-CN': 'showZero'
          }
        },
        name: 'showZero',
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
                label: 'default',
                value: 'default'
              },
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
                label: 'processing',
                value: 'processing'
              }
            ],
            options: [
              {
                label: 'default',
                value: 'default'
              },
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
                label: 'processing',
                value: 'processing'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
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
                      'en-US': 'root',
                      'zh-CN': 'root'
                    }
                  },
                  name: 'root',
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
                      'en-US': 'indicator',
                      'zh-CN': 'indicator'
                    }
                  },
                  name: 'indicator',
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
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': 'text'
          }
        },
        name: 'text',
        setter: 'SlotSetter'
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
        setter: 'StringSetter'
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
    title: '徽标数',
    screenshot: '',
    schema: {
      componentName: 'Badge',
      props: {}
    }
  }
];

export default {
  ...BadgeMeta,
  snippets
};
