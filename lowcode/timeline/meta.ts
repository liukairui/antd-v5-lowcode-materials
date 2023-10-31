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
    package: 'antd-v5-lowcode-materials',
    version: '0.0.1',
    exportName: 'Timeline',
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
          }
        },
        name: 'items',
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
                          'en-US': 'prefixCls',
                          'zh-CN': 'prefixCls'
                        }
                      },
                      name: 'prefixCls',
                      setter: 'StringSetter'
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
                      setter: 'StringSetter'
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
                          'en-US': 'dot',
                          'zh-CN': 'dot'
                        }
                      },
                      name: 'dot',
                      setter: 'SlotSetter'
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
                      setter: 'BoolSetter'
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
                      setter: 'StringSetter'
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
                          'en-US': 'label',
                          'zh-CN': 'label'
                        }
                      },
                      name: 'label',
                      setter: 'SlotSetter'
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
          }
        }
      },
      {
        title: {
          label: {
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
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pendingDot',
            'zh-CN': 'pendingDot'
          }
        },
        name: 'pendingDot',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'reverse',
            'zh-CN': 'reverse'
          }
        },
        name: 'reverse',
        setter: 'BoolSetter'
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
