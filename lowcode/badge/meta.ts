import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeMeta: IPublicTypeComponentMetadata = {
  componentName: 'Badge',
  title: 'Badge',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Badge',
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
            'en-US': 'count',
            'zh-CN': 'Number to '
          }
        },
        name: 'count',
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
            'en-US': 'showZero',
            'zh-CN': 'showZero'
          }
        },
        name: 'showZero',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'overflowCount',
            'zh-CN': 'Max count '
          }
        },
        name: 'overflowCount',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dot',
            'zh-CN': 'Whether to'
          }
        },
        name: 'dot',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
          },
          initialValue: undefined
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
            'en-US': 'text',
            'zh-CN': 'text'
          }
        },
        name: 'text',
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
          },
          initialValue: undefined
        }
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
            'en-US': 'title',
            'zh-CN': 'title'
          }
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
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
                    componentName: 'StringSetter',
                    initialValue: undefined
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
                    componentName: 'StringSetter',
                    initialValue: undefined
                  }
                }
              ],
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
            'en-US': 'styles',
            'zh-CN': 'styles'
          }
        },
        name: 'styles',
        setter: {
          componentName: 'ObjectSetter',
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
                      'en-US': 'indicator',
                      'zh-CN': 'indicator'
                    }
                  },
                  name: 'indicator',
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
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Badge',
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
