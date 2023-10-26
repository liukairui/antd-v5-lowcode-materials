import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TimelineMeta: IPublicTypeComponentMetadata = {
  componentName: 'Timeline',
  title: '时间轴',
  group: '原子组件',
  category: '数据展示 Data Display',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Timeline',
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
            'en-US': 'items',
            'zh-CN': 'items'
          },
          tip: {
            type: 'i18n',
            'en-US': 'items',
            'zh-CN': 'items'
          }
        },
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
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
                          'en-US': 'prefixCls',
                          'zh-CN': 'prefixCls'
                        }
                      },
                      name: 'prefixCls',
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'className',
                          'zh-CN': 'className'
                        }
                      },
                      name: 'className',
                      setter: {
                        componentName: 'StringSetter',
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
                                    label: 'green',
                                    value: 'green'
                                  },
                                  {
                                    label: 'red',
                                    value: 'red'
                                  },
                                  {
                                    label: 'gray',
                                    value: 'gray'
                                  }
                                ],
                                options: [
                                  {
                                    label: 'blue',
                                    value: 'blue'
                                  },
                                  {
                                    label: 'green',
                                    value: 'green'
                                  },
                                  {
                                    label: 'red',
                                    value: 'red'
                                  },
                                  {
                                    label: 'gray',
                                    value: 'gray'
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
                          'en-US': 'dot',
                          'zh-CN': 'dot'
                        }
                      },
                      name: 'dot',
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
                          'en-US': 'pending',
                          'zh-CN': 'pending'
                        }
                      },
                      name: 'pending',
                      setter: {
                        componentName: 'BoolSetter',
                        initialValue: undefined
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'position',
                          'zh-CN': 'position'
                        }
                      },
                      name: 'position',
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'style',
                          'zh-CN': 'style'
                        }
                      },
                      name: 'style',
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
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
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
                          'en-US': 'children',
                          'zh-CN': 'children'
                        }
                      },
                      name: 'children',
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
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': 'mode'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': 'mode'
          }
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
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
                label: 'alternate',
                value: 'alternate'
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
                label: 'alternate',
                value: 'alternate'
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
            'en-US': 'pending',
            'zh-CN': 'pending'
          },
          tip: {
            type: 'i18n',
            'en-US': 'pending',
            'zh-CN': 'pending'
          }
        },
        name: 'pending',
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
            'en-US': 'pendingDot',
            'zh-CN': 'pendingDot'
          },
          tip: {
            type: 'i18n',
            'en-US': 'pendingDot',
            'zh-CN': 'pendingDot'
          }
        },
        name: 'pendingDot',
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
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          },
          tip: {
            type: 'i18n',
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          }
        },
        name: 'reverse',
        setter: {
          componentName: 'BoolSetter',
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
    title: '时间轴',
    screenshot: '',
    schema: {
      componentName: 'Timeline',
      props: {}
    }
  }
];

export default {
  ...TimelineMeta,
  snippets
};
